import { useEffect, useRef, useState } from "react";

const BaseURL = "https://jsonplaceholder.typicode.com";
interface Post {
  id: number;
  title: string;
}

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const abortControllref = useRef<AbortController | null>(null);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        abortControllref.current?.abort();
        abortControllref.current = new AbortController();

        setLoading(true);
        const respone = await fetch(`${BaseURL}/posts?page=${page},{
          signal: abortControllref.current.signal
        }`);
        const data = await respone.json();
        setPosts(data);
      };
      fetchPosts();
    } catch (e) {
      if (e == "AbortError") {
        console.log("errrrrorr");
      }
    } finally {
      setLoading(false);
    }
  }, [page]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Data fetching</h1>
      <button onClick={() => setPage(page + 1)}>{page}</button>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
