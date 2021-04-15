import { useVideo } from "../services/yt";
import { Tags } from "../components/Tags";
import { SingleVideo } from "../components/SingleVideo";

export const Video = ({ id }) => {
  const video = useVideo(id);

  if (!video) {
    return <div>loading</div>;
  }

  const { tags, channelId, channelTitle } = video.snippet;

  return (
    <article className="video-page">
      <SingleVideo id={id} />

      <a href={`https://www.youtube.com/channel/${channelId}`}>
        <h2 className="video-channel">channel: {channelTitle}</h2>
      </a>

      <Tags tags={tags} />
    </article>
  );
};
