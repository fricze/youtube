import { A } from "hookrouter";

export const Paging = ({ path = "/", prevPageToken, nextPageToken }) => (
  <div className="paging">
    {prevPageToken ? (
      <A className="page-link" href={path + prevPageToken}>
        Prev Page
      </A>
    ) : (
      <span />
    )}

    {nextPageToken ? (
      <A className="page-link" href={path + nextPageToken}>
        Next Page
      </A>
    ) : (
      <span />
    )}
  </div>
);
