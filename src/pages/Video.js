import { useVideo } from "../services/yt";

const SnippetThumbnail = ({ url }) => (
  <figure>
    <img src={url} alt="video thumbnail" />
  </figure>
);

const SnippetDescription = ({ description }) => (
  <p>{description.substring(0, 400)}</p>
);

export const Video = ({ id, title, channelTitle, thumbnails, description }) => {
  const video = useVideo(id);

  if (!video) {
    return <div>loading</div>;
  }

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: video.player.embedHtml }} />
    </article>
  );
};
