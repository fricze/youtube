import { FullSnippet } from "./Snippet";

export const List = ({ items, Snippet = FullSnippet }) => (
  <div className="videos-list">
    {items.map(({ id, snippet }) => (
      <Snippet key={id} id={id} {...snippet} />
    ))}
  </div>
);
