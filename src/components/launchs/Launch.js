import { useState, useRef, useCallback } from "react";
import usePosts from "../../hooks/usePosts";
import Card from "../cards/Card";

function Launch() {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum);

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return (
        <Card
          ref={lastPostRef}
          key={i}
          post={post}
          mission_name={post.mission_name}
          launch_date_utc={post.launch_date_utc}
          details={post.details}
        />
      );
    }
    return (
      <Card
        key={i}
        post={post}
        mission_name={post.mission_name}
        launch_date_utc={post.launch_date_utc}
        details={post.details}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">
        {content}
        {isLoading && <p className="center">Loading more posts...</p>}
      </div>
    </div>
  );
}

export default Launch;
