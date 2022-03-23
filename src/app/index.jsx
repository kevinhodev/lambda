import { Transition, TransitionGroup } from "react-transition-group";
import { ThemeProvider } from "../components/ThemeProvider";
import Sidebar from "../components/Sidebar";
import "./reset.css";
import "./index.css";
import "./base.css";
import classNames from "classnames";
import useLocalStorage from "../hooks/useLocalStorage";

const App = () => {
  const themeType = useLocalStorage("theme", "dark");

  return (
    <>
      <ThemeProvider themeType={themeType}>
        <TransitionGroup component="main" className="app">
          <Transition timeout={300}>
            {(status) => (
              <div className={classNames("app__page", `app__page--${status}`)}>
                <Sidebar />
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </ThemeProvider>
    </>
  );
};

export default App;
