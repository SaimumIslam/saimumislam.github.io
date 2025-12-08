"use client";

import { useTheme } from "next-themes";

import ThemeToggleButton from "./toggle-btn";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const newMode = theme === "dark" ? "light" : "dark";

  return (
    <>
      <ThemeToggleButton
        theme={newMode}
        setTheme={setTheme}
        className="fixed bottom-2 right-2"
      />
    </>
  );
};
export default ThemeToggle;
