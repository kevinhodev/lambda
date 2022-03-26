import { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import ThemeToggle from "../ThemeToggle";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { menuData } from "../Menu/menuData";
import clamp from "../../utils/math";
import "./index.css";
import classNames from "classnames";

const Sidebar = ({ hideable = true }) => {
  const [open, setOpen] = useState(true);
  const touchAreaRef = useRef();
  const sidebarRef = useRef();
  const previousTouchOffsetX = useRef(0);
  const touchOffsetX = useRef(0);

  const moveSidebar = (sidebar, event) => {
    const style = getComputedStyle(sidebar);
    const matrix = new DOMMatrix(style.transform);

    previousTouchOffsetX.current = touchOffsetX.current;
    touchOffsetX.current = event.targetTouches[0].clientX;

    const isMoveToRight = previousTouchOffsetX.current <= touchOffsetX.current;

    if (matrix.m41 < 0 && isMoveToRight) {
      sidebar.style.transform = `translateX(${clamp(
        matrix.m41 + touchOffsetX.current * 0.5,
        -70,
        0
      )}px)`;
    }
  };

  const closeSidebar = (sidebar) => {
    setOpen(false);
    sidebar.style.transform = "translateX(-70px)";
  };

  useEffect(() => {
    hideable &&
      touchAreaRef.current.addEventListener("touchmove", (event) =>
        moveSidebar(sidebarRef.current, event)
      );
  }, [hideable]);

  return (
    <>
      {hideable && <div className="touch-area" ref={touchAreaRef}></div>}
      <aside
        className={classNames("sidebar", { "sidebar--close": !open })}
        ref={sidebarRef}
      >
        <Logo />
        <Menu>
          {menuData.map((item) => (
            <MenuItem key={item.text} text={item.text} icon={item.icon} />
          ))}
        </Menu>
        <ThemeToggle />
        {hideable && (
          <div
            className="left-arrow"
            onClick={() => closeSidebar(sidebarRef.current)}
          >
            <LeftArrow />
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
