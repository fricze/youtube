import { useVideo } from "../services/yt";

export const Video = ({ id, title, channelTitle, thumbnails, description }) => {
  const video = useVideo(id);

  if (!video) {
    return <div>loading</div>;
  }

  return (
    <article className="single-video">
      <iframe
        title="title"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </article>
  );
};
