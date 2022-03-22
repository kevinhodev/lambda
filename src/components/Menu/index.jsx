import { forwardRef } from "react";
import classNames from "classnames";
import "./index.css";

const Menu = forwardRef(
  ({ as: Component = "ul", direction = "vertical", children }, ref) => {
    return (
      <Component className={classNames("menu", `menu-${direction}`)} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Menu;
