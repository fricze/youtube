import "./App.css";
import { useRoutes, A } from "hookrouter";
import { routes } from "./routing/routes";
import { Header } from "./components/Header";

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
