import { Snippet } from "./Snippet";

export const List = ({ videos }) => (
  <div>
    {videos.map(({ id, snippet }) => (
      <div key={id}>
        <Snippet id={id} {...snippet} />
      </div>
    ))}
  </div>
);
