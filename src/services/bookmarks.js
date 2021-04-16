import { useEffect, useState } from "react";

const bookmarksKey = "bookmarks-list";

export const useBookmarks = () => {
  const currentBookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
  const [bookmarks, setBookmarks] = useState(currentBookmarks);

  const addBookmark = (video) => {
    setBookmarks((b) => b.concat(video));
  };

  useEffect(() => {
    localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
  }, [bookmarks]);

  return { bookmarks, addBookmark };
};
