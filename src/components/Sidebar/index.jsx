import { useEffect, useRef } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";
import MenuItem from "../MenuItem";
import { menuData } from "../Menu/menuData";
import "./index.css";

const Sidebar = ({ hideable = true }) => {
  const touchAreaRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    touchAreaRef.current.addEventListener("touchmove", (event) =>
      moveSidebar(sidebarRef.current, event)
    );

    return () =>
      touchAreaRef.current.removeEventListener("touchmove", moveSidebar);
  }, []);

  return (
    <>
      {hideable && <div className="touch-area" ref={touchAreaRef}></div>}
      <aside className="sidebar" ref={sidebarRef}>
        <Logo />
        <Menu>
          {menuData.map((item) => (
            <MenuItem key={item.text} text={item.text} icon={item.icon} />
          ))}
        </Menu>
        <ThemeToggle />
      </aside>
    </>
  );
};

const moveSidebar = (sidebar, event) => {
  const style = getComputedStyle(sidebar);
  const matrix = new DOMMatrix(style.transform);

  const touchOffsetX = event.targetTouches[0].clientX;

  if (matrix.m41 < 0) {
    sidebar.style.transform = `translateX(${
      matrix.m41 + touchOffsetX * 0.05
    }px)`;
  }
};

export default Sidebar;
