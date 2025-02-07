import { useFetch } from "./context/useFetch";
import "./App.css";

type GitHubUser = {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
};

function App() {
  const { data, loading, error } = useFetch<GitHubUser[]>(
    "https://api.github.com/users"
  );

  if (loading) {
    return <div className="loading">Loading GitHub users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">GitHub Users</h1>
      <div className="user-grid">
        {data?.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <a
              href={user.html_url}
              className="username"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
