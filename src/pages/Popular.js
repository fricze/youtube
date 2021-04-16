import { List } from "../components/List";
import { SmallSnippet } from "../components/Snippet";
import { Paging } from "../components/Paging";
import { usePopular } from "../services/yt";
import { useBookmarks } from "../services/bookmarks";
import { useScrollToTop } from "../effects/window";

export const Popular = ({ pageToken }) => {
  useScrollToTop(pageToken);

  const videos = usePopular({ pageToken });
  const { bookmarks } = useBookmarks();
  return (
    <div>
      <Paging {...videos} />
      <List {...videos} />
      <Paging {...videos} />

      <h2>Your Bookmarks</h2>
      <List items={bookmarks} Snippet={SmallSnippet} />
    </div>
  );
};
