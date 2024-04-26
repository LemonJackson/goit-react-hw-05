import { NavLink, Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";

import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <Link to="/" className={css.logo}>
        <SiThemoviedatabase className={css.icon} />
        <p className={css.text}>MovieGram</p>
      </Link>
      <div className={css.menu}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
