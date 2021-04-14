import { A } from "hookrouter";

const SnippetThumbnail = ({ url }) => (
  <figure>
    <img src={url} alt="video thumbnail" />
  </figure>
);

const SnippetDescription = ({ description }) => (
  <p>{description.substring(0, 400)}</p>
);

export const Snippet = ({
  id,
  title,
  channelTitle,
  thumbnails,
  description,
}) => (
  <article>
    <header>
      <A href={"/video/" + id}>
        <h1>title: {title}</h1>
      </A>
      <h2>channel: {channelTitle}</h2>
    </header>

    <SnippetThumbnail {...thumbnails.default} />

    <SnippetDescription description={description} />
  </article>
);
