import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Cash } from "../../assets/icons/cash.svg";
import { ReactComponent as Reader } from "../../assets/icons/reader.svg";
import { ReactComponent as StatsChart } from "../../assets/icons/stats-chart.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import "./index.css";

const Icon = ({ icon, ...rest }) => {
  const icons = {
    menu: Menu,
    cash: Cash,
    reader: Reader,
    statsChart: StatsChart,
    settings: Settings
  };

  const IconComponent = icons[icon] || null;

  return <IconComponent className="icon" {...rest} />;
};

export default Icon;
