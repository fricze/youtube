import { A } from "hookrouter";

const SnippetThumbnail = ({ url }) => (
  <figure className="video-thumbnail">
    <img src={url} alt="video thumbnail" />
  </figure>
);

const SnippetDescription = ({ description }) => (
  <p className="video-description">{description.substring(0, 400)}</p>
);

export const Snippet = ({
  channelId,
  id,
  title,
  channelTitle,
  thumbnails,
  description,
}) => (
  <article className="video-snippet">
    <header className="video-header">
      <A className="link" href={"/video/" + id}>
        <h1>{title}</h1>
      </A>

      <a href={`https://www.youtube.com/channel/${channelId}`}>
        <h2 className="video-channel">channel: {channelTitle}</h2>
      </a>
    </header>

    <SnippetThumbnail {...thumbnails.medium} />

    <SnippetDescription description={description} />
  </article>
);
