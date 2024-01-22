import { useCycle } from "framer-motion";
import { Sidebar, links } from "../Sidebar";
import "./Header.scss";
import MenuOpen from "../../assets/icons/MenuOpen";
import { motion } from "framer-motion";

export function Header() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <header className="Header">
      <div className="Header__container">
        <motion.button onTap={() => cycleOpen()} className="Header__button">
          <MenuOpen />
        </motion.button>

        <nav className="Header__navigation">
          <ul className="Header__list">
            {links.map(item => (
              <li key={item.id} className="Header__list__item">
                <a href={item.to}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Sidebar open={open} setOpen={cycleOpen} />
    </header>
  );
}
