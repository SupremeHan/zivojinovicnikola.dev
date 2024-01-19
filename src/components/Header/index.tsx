import { MenuIcon } from "../MenuIcon";
import "./Header.scss";

export function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <button className="Header__logo">
          <MenuIcon />
        </button>
        <nav role="navigation">
          <ul className="Header__list">
            <li className="Header__list__item">
              <a href="#about">About</a>
            </li>
            <li className="Header__list__item">
              <a href="#experience">Experience</a>
            </li>
            <li className="Header__list__item">
              <a href="#projects">Projects</a>
            </li>
            <li className="Header__list__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
