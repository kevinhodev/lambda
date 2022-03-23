import Logo from "../Logo";
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";
import MenuItem from "../MenuItem";
import { menuData } from "../Menu/menuData";
import "./index.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Menu>
        {menuData.map((item) => (
          <MenuItem key={item.text} text={item.text} icon={item.icon} />
        ))}
      </Menu>
      <ThemeToggle />
    </aside>
  );
};

export default Sidebar;
