import { Search } from "../pages/Search";
import { Popular } from "../pages/Popular";
import { Video } from "../pages/Video";

export const routes = {
  "/": () => <Popular page={0} />,
  "/:pageToken": ({ pageToken }) => <Popular pageToken={pageToken} />,
  "/search/": () => <Search infoText={"Type in your query to find videos"} />,
  "/search/:query": ({ query }) => <Search query={query} />,
  "/search/:query/:pageToken": ({ query, pageToken }) => (
    <Search query={query} pageToken={pageToken} />
  ),
  "/video/:id": ({ id }) => <Video id={id} />,
};
