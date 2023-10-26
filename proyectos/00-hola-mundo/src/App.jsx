import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    username: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    username: "armandodev",
    name: "Jorge Armando Ceras Cárdenas",
    isFollowing: false,
  },
  {
    username: "unknown",
    name: "Unknown User",
    isFollowing: true,
  },
  {
    username: "TMChein",
    name: "Tomas Chein",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          userName={username}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
