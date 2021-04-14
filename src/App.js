import "./App.css";
import { useRoutes, A } from "hookrouter";
import { useSearch, useMainList } from "./data";

const SnippetThumbnail = ({ url }) => (
  <figure>
    <img src={url} alt="video thumbnail" />
  </figure>
);

const SnippetDescription = ({ description }) => (
  <p>{description.substring(0, 400)}</p>
);

const Snippet = ({ title, channelTitle, thumbnails, description }) => (
  <article>
    <header>
      <h1>title: {title}</h1>
      <h2>channel: {channelTitle}</h2>
    </header>

    <SnippetThumbnail {...thumbnails.default} />

    <SnippetDescription description={description} />
  </article>
);

const MainList = () => {
  const list = useSearch();

  return (
    <div>
      {list.map(({ id, snippet }) => (
        <div key={id.videoId}>
          <Snippet {...snippet} />
        </div>
      ))}
    </div>
  );
};

const routes = {
  "/": () => <MainList />,
  "/user": () => <div>user</div>,
  "/about": () => <div>about</div>,
  "/contact": () => <div>contact</div>,
};

const App = () => {
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
};

export default App;
