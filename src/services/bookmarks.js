import { useEffect, useState } from "react";

export const useBookmarks = () => {
  const currentBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const [bookmarks, setBookmarks] = useState(currentBookmarks);

  return [bookmarks, setBookmarks];
};
