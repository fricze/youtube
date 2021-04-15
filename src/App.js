import "./App.css";
import { useRoutes, A } from "hookrouter";
import { Search } from "./pages/Search";
import { Popular } from "./pages/Popular";
import { Video } from "./pages/Video";
import { SearchInput } from "./components/SearchInput";

const routes = {
  "/": () => <Popular />,
  "/search/:query": ({ query }) => <Search query={query} />,
  "/video/:id": ({ id }) => <Video id={id} />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="app">
      <SearchInput />
      <A href="/">Popular</A> <br />
      <A href="/search/owls">Search</A>
      {routeResult}
    </div>
  );
};

export default App;
