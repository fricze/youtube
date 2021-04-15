import { Search } from "../pages/Search";
import { Popular } from "../pages/Popular";
import { Video } from "../pages/Video";

export const routes = {
  "/": () => <Popular page={0} />,
  "/:page": ({ page }) => <Popular page={page} />,
  "/search/": () => <Search infoText={"Type in your query to find videos"} />,
  "/search/:query": ({ query }) => <Search query={query} page={0} />,
  "/search/:query/:page": ({ query, page }) => (
    <Search query={query} page={page} />
  ),
  "/video/:id": ({ id }) => <Video id={id} />,
};
