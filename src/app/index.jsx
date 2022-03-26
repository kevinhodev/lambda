import { Transition, TransitionGroup } from "react-transition-group";
import classNames from "classnames";
import { ThemeProvider } from "../components/ThemeProvider";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./reset.css";
import "./index.css";
import "./base.css";

import useLocalStorage from "../hooks/useLocalStorage";

const App = () => {
  const currentTheme = useLocalStorage("theme", "dark");

  return (
    <>
      <ThemeProvider themeType={currentTheme}>
        <Sidebar />
        <TransitionGroup component="main" className="app">
          <Transition timeout={300}>
            {(status) => (
              <div className={classNames("app__page", `app__page--${status}`)}>
                <Header />
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </ThemeProvider>
    </>
  );
};

export default App;
