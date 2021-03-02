import { useEffect, useState } from "react";
import styles from "../styles/components/ThemeSwitcher.module.css";

export function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleSwitchTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  useEffect(() => {
    setIsDarkTheme(JSON.parse(localStorage.getItem("isDarkTheme")) ?? false);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("defaultTheme");
      document.documentElement.classList.add("darkTheme");
    } else {
      document.documentElement.classList.remove("darkTheme");
      document.documentElement.classList.add("defaultTheme");
    }

    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <div>
      {isDarkTheme ? (
        <img
          className={styles.themeIcon}
          src="icons/moon.svg"
          alt="Dark theme"
          onClick={handleSwitchTheme}
        />
      ) : (
        <img
          className={styles.themeIcon}
          src="icons/sun.svg"
          alt="Default theme"
          onClick={handleSwitchTheme}
        />
      )}
    </div>
  );
}
