import { Transition } from "react-transition-group";
import classNames from "classnames";
import "./index.css";

const Logo = () => {
  return (
    <Transition in timeout={300}>
      {(status) => (
        <div className={classNames("logo", `logo--${status}`)}>
          <svg
            aria-hidden
            className="logo__svg"
            width="46"
            height="36"
            viewBox="-1 -1 52 42"
          >
            <path
              d="M5 0 5 0 45 0M0 10 5 0M0 15 0 10M0 25 0 30M5 40 0 30M45 40 5 40M50 30 45 40M50 25 50 30M50 15 50 10M45 0 50 10M0 10 15 20M15 30 15 20M20 30 20 20 20 20M50 10 35 20M35 30 35 20M30 30 30 20M25 10 20 20M25 10 30 20"
              stroke="#ffffff"
              fill="none"
            />
          </svg>
          <h4 className="logo__title">Lambda</h4>
        </div>
      )}
    </Transition>
  );
};

export default Logo;
