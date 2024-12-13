import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BaseURL = "https://jsonplaceholder.typicode.com";
interface Post {
  id: number;
  title: string;
}

const App = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,

    isLoading,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: async () => {
      const respone = await fetch(`${BaseURL}/posts?page=${page}`);
      return (await respone.json()) as Post[];
    },
  });
  return (
    <div>
      <h1>Data fetching with React Query</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page</button>
      <button onClick={() => setPage(page - 1)}>Decrease Page</button>
      {isLoading ? <h1>Loading...</h1> : null}
      {!isLoading ? (
        <ul>
          {posts?.map((post) => {
            return (
              <li>
                <h3>{post.title}</h3>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default App;
