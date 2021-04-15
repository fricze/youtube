export const Paging = ({ path = "/", prevPageToken, nextPageToken }) => (
  <>
    {prevPageToken && <a href={path + prevPageToken}>Prev Page</a>}

    {nextPageToken && <a href={path + nextPageToken}>Next Page</a>}
  </>
);
