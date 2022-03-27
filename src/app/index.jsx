import { Transition, TransitionGroup } from "react-transition-group";
import { Routes, Route } from "react-router-dom";
import classNames from "classnames";
import { ThemeProvider } from "../components/ThemeProvider";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";

import "./reset.css";
import "./index.css";
import "./base.css";

import useLocalStorage from "../hooks/useLocalStorage";

const App = () => {
  const currentTheme = useLocalStorage("theme", "dark");

  return (
    <>
      <ThemeProvider themeType={currentTheme}>
        <TransitionGroup component="main" className="app">
          <Transition timeout={10000}>
            {(status) => (
              <div className={classNames("app__page", `app__page--${status}`)}>
                <Sidebar />
                <Header />
                <div className="content">
                  <Routes className>
                    <Route path="settings" element={<Settings />} />
                    <Route path="dashboard" element={<Dashboard />} />
                  </Routes>
                </div>
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </ThemeProvider>
    </>
  );
};

export default App;
