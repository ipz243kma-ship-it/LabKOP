
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`theme-card ${isDark ? "dark" : "light"}`}>
      <h2>Display Mode</h2>

      <p>{isDark ? "Dark Mode" : "Light Mode"}</p>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
