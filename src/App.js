import "./App.css";
import { useRoutes, A } from "hookrouter";

const routes = {
  "/user": () => <div>user</div>,
  "/about": () => <div>about</div>,
  "/contact": () => <div>contact</div>,
};

function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <A href="/user">Users Page</A> <br />
      <A href="/about">About Page</A>
      <br />
      <A href="/contact">Contacts Page</A>
      {routeResult}
    </div>
  );
}

export default App;

const API_KEY = "AIzaSyDHAysMhipieU7n_6M8cAfE1xNduI9lXRY";

const data = fetch(
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
);

data.then((a) => a.json()).then((a) => console.log(a));
