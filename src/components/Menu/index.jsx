import { forwardRef } from "react";
import classNames from "classnames";
import "./index.css";

const Menu = forwardRef(
  (
    { as: Component = "ul", direction = "vertical", children, ...rest },
    ref
  ) => {
    return (
      <Component
        className={classNames("menu", `menu-${direction}`)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Menu;
