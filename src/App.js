import "./App.css";
import { useRoutes } from "hookrouter";
import { routes } from "./routing/routes";
import { Header } from "./components/Header";

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="app">
      <Header />
      {routeResult}
    </div>
  );
};

export default App;
