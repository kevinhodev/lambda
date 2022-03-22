import Logo from "../Logo";
import Menu from "../Menu";
import { menuData } from "../Menu/menuData";
import MenuItem from "../MenuItem";
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
    </aside>
  );
};

export default Sidebar;
