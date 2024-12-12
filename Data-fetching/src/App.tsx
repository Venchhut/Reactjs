import { useEffect, useState } from "react";

const BaseURL = "https://jsonplaceholder.typicode.com";
interface Post {
  id: number;
  title: string;
}

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const respone = await fetch(`${BaseURL}/posts`);
      const data = await respone.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Data fetching</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
