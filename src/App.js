import "./App.css";
import { useRoutes, A } from "hookrouter";
import { Search } from "./pages/Search";
import { Popular } from "./pages/Popular";
import { Video } from "./pages/Video";
import { Header } from "./components/Header";

const routes = {
  "/": () => <Popular />,
  "/search/": () => <Search infoText={"Type in your query to find videos"} />,
  "/search/:query": ({ query }) => <Search query={query} />,
  "/video/:id": ({ id }) => <Video id={id} />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="app">
      <Header />
      <A href="/">Popular</A> <br />
      {routeResult}
    </div>
  );
};

export default App;
