
import "./App.css";

import KPICard from "./components/KPICard";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import RepositoryList from "./components/RepositoryList";

import { kpiData, repositories } from "./data/mockData";

import { Star, GitFork, FolderGit } from "lucide-react";

const icons = {
  star: <Star size={20} />,
  "git-fork": <GitFork size={20} />,
  "folder-git": <FolderGit size={20} />,
};

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>GitHub Analytics</h1>
        <p>Organization Dashboard</p>
      </header>

      <section className="kpi-grid">
        {kpiData.map((item) => (
          <KPICard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            icon={icons[item.icon]}
          />
        ))}
      </section>

      <Counter />

      <ThemeToggle />

      <RepositoryList repositories={repositories} />
    </div>
  );
}

export default App;
