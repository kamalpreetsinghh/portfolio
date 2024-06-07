import { FaMoon } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import useTheme from "../context/theme";

const ThemeSwitch = () => {
  const { theme, darkTheme, lightTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {theme === "dark" ? (
        <FaMoon className="w-6 h-6 text-primary" />
      ) : (
        <MdLightMode className="w-6 h-6 text-primary" />
      )}
    </button>
  );
};

export default ThemeSwitch;
