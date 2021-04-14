import "./App.css";
import { useRoutes, A } from "hookrouter";
import { Search } from "./pages/Search";
import { Popular } from "./pages/Popular";
import { Video } from "./pages/Video";

const routes = {
  "/": () => <Popular />,
  "/search": () => <Search />,
  "/video/:id": ({ id }) => <Video id={id} />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <A href="/">Popular</A> <br />
      <A href="/search">Search</A>
      {routeResult}
    </div>
  );
};

export default App;
