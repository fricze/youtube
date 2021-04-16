import unescape from "unescape";
import { useVideo } from "../services/yt";
import { useBookmarks } from "../services/bookmarks";
import { Tags } from "../components/Tags";
import { SingleVideo } from "../components/SingleVideo";

export const Video = ({ id }) => {
  const video = useVideo(id);
  const { addBookmark } = useBookmarks();

  if (!video) {
    return <div>loading</div>;
  }

  const { thumbnails, tags, channelId, channelTitle } = video.snippet;

  return (
    <article className="video-page">
      <SingleVideo id={id} />

      <a href={`https://www.youtube.com/channel/${channelId}`}>
        <h2 className="video-channel">channel: {unescape(channelTitle)}</h2>
      </a>

      <span
        className="bookmark page-link"
        onClick={() =>
          addBookmark({ id, snippet: { thumbnail: thumbnails.medium } })
        }
      >
        Bookmark video
      </span>

      <Tags tags={tags} />
    </article>
  );
};
