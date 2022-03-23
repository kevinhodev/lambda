import classNames from "classnames";
import useTheme from "../../hooks/useTheme";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sunny } from "../../assets/icons/sunny.svg";
import "./index.css";

const ThemeToggle = () => {
  const { currentTheme, setCurrentTheme } = useTheme();
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setCurrentTheme(newTheme);
  };

  return (
    <div className="theme-toggle-wrapper">
      <span className={classNames("light-label", { active: !isDark })}>
        Light
      </span>
      <div
        className={classNames("theme-toggle", `theme-toggle--${currentTheme}`)}
      >
        <Moon className="dark-icon" />
        <Sunny className="light-icon" />
        <div className="theme-toggle__circle" onClick={toggleTheme}></div>
      </div>
      <span className={classNames("dark-label", { active: isDark })}>Dark</span>
    </div>
  );
};

export default ThemeToggle;
