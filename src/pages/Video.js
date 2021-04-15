import { A } from "hookrouter";
import { useVideo } from "../services/yt";

export const Video = ({ id }) => {
  const video = useVideo(id);

  if (!video) {
    return <div>loading</div>;
  }

  const { tags, channelId, channelTitle } = video.snippet;

  return (
    <article className="video-page">
      <div className="single-video">
        <iframe
          title="title"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <a href={`https://www.youtube.com/channel/${channelId}`}>
        <h2 className="video-channel">channel: {channelTitle}</h2>
      </a>

      <ul className="video-tags">
        {tags.map((tag) => (
          <li>
            <A href={`/search/${tag}`}>{tag}</A>
          </li>
        ))}
      </ul>
    </article>
  );
};
