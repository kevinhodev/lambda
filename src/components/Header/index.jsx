import SearchBar from "../SearchBar";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as NotificationsIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import "./index.css";

const Header = ({ as: Component = "header" }) => {
  return (
    <Component className="header">
      <SearchBar />
      <div className="personal-info">
        <MessageIcon className="personal-info__icon" />
        <NotificationsIcon className="personal-info__icon" />
        <ProfileIcon className="personal-info__icon icon-profile" />
      </div>
    </Component>
  );
};

export default Header;
