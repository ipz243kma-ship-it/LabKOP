
import { useState } from "react";

function RepositoryList({ repositories }) {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const languages = [
    "All",
    ...new Set(repositories.map((repo) => repo.language))
  ];

  const filteredRepositories =
    selectedLanguage === "All"
      ? repositories
      : repositories.filter(
          (repo) => repo.language === selectedLanguage
        );

  return (
    <div className="repository-card">
      <h2>Repositories</h2>

      <select
        value={selectedLanguage}
        onChange={(event) => setSelectedLanguage(event.target.value)}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <div className="repository-list">
        {filteredRepositories.map((repo) => (
          <div className="repository-item" key={repo.id}>
            <div>
              <h3>{repo.name}</h3>
              <span>{repo.language}</span>
            </div>

            <div className="repository-stats">
              <span>★ {repo.stars}</span>
              <span>⑂ {repo.forks}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredRepositories.length === 0 && (
        <p>No repositories found.</p>
      )}
    </div>
  );
}

export default RepositoryList;
