import { Transition, TransitionGroup } from "react-transition-group";
import { Routes, Route } from "react-router-dom";
import classNames from "classnames";
import { ThemeProvider } from "../components/ThemeProvider";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import Settings from "../pages/Settings";

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
          <Transition timeout={300}>
            {(status) => (
              <div className={classNames("app__page", `app__page--${status}`)}>
                <Sidebar />
                <Header />
                <div className="content">
                  <Routes>
                    <Route path="settings" element={<Settings />} />
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
