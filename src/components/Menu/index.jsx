import { forwardRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { menuData } from "./menuData";
import Icon from "../Icon";
import "./index.css";

const Menu = forwardRef(
  (
    { as: Component = "ul", direction = "vertical", children, icon, ...rest },
    ref
  ) => {
    const location = useLocation();

    const isMatch = (pathname) => {
      if (!pathname) return false;
      return pathname === location.pathname;
    };

    return (
      <Component
        className={classNames("menu", `menu-${direction}`)}
        ref={ref}
        {...rest}
      >
        {menuData.map((item) => (
          <li
            className="menu__item"
            aria-current={isMatch(item.href) ? "page" : ""}
            key={item.text}
          >
            <NavLink to={item.href} className="menu__item-link" {...rest}>
              <Icon className="menu__item-link__icon" icon={item.icon} />
              <span className="menu__item-link__text">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </Component>
    );
  }
);

export default Menu;
