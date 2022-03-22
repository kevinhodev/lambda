import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Cash } from "../../assets/icons/cash.svg";
import { ReactComponent as Reader } from "../../assets/icons/reader.svg";
import { ReactComponent as StatsChart } from "../../assets/icons/stats-chart.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import "./index.css";

const icons = {
  menu: Menu,
  cash: Cash,
  reader: Reader,
  statsChart: StatsChart,
  settings: Settings
};

const MenuItem = ({
  as: Component = "li",
  text,
  icon,
  href = "/",
  ...rest
}) => {
  const Icon = icons[icon] || null;

  return (
    <Component className="menu__item" {...rest}>
      <Icon className="menu__item-icon" />
      <a className="menu__item-link" href={href}>
        {text}
      </a>
    </Component>
  );
};

export default MenuItem;
