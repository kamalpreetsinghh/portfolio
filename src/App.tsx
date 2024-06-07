import { FloatingNav } from "./components/ui/FloatingNav";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { navItems } from "./data";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);

  const darkTheme = () => {
    setTheme("dark");
  };

  const lightTheme = () => {
    setTheme("light");
  };

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <main className="relative dark:bg-black bg-[#f6efff] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Projects />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
