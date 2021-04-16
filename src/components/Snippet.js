import { A } from "hookrouter";
import unescape from "unescape";

const SnippetThumbnail = ({ videoLink, url }) => (
  <A href={videoLink}>
    <figure className="video-thumbnail">
      <img src={url} alt="video thumbnail" />
    </figure>
  </A>
);

const SnippetDescription = ({ description }) => (
  <p className="video-description">{description.substring(0, 400)}</p>
);

export const FullSnippet = ({
  channelId,
  id,
  title,
  channelTitle,
  thumbnails,
  description,
}) => {
  const videoLink = "/video/" + id;

  return (
    <article className="video-snippet">
      <header className="video-header">
        <A className="link" href={videoLink}>
          <h1 className="video-title">{unescape(title)}</h1>
        </A>

        <a href={`https://www.youtube.com/channel/${channelId}`}>
          <h2 className="video-channel">channel: {unescape(channelTitle)}</h2>
        </a>
      </header>

      <SnippetThumbnail videoLink={videoLink} {...thumbnails.medium} />

      <SnippetDescription description={description} />
    </article>
  );
};

export const SmallSnippet = ({ id, thumbnail }) => {
  const videoLink = "/video/" + id;

  return (
    <article className="video-snippet">
      <SnippetThumbnail videoLink={videoLink} {...thumbnail} />
    </article>
  );
};
