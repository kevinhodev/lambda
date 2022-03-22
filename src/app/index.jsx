import { ThemeProvider } from "../components/ThemeProvider";
import Sidebar from "../components/Sidebar";
import "./reset.css";
import "./index.css";
import "./base.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    </>
  );
};

export default App;
