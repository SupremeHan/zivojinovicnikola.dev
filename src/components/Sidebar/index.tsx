import MenuClose from "../../assets/icons/MenuClose";
import "./Sidebar.scss";
import { AnimatePresence, motion } from "framer-motion";

export const links = [
  { name: "About", to: "#about", id: 1 },
  { name: "Experience", to: "#experience", id: 2 },
  { name: "Projects", to: "#projects", id: 3 },
  { name: "Contact", to: "#contact", id: 4 },
] as const;

interface SidebarProps {
  open: boolean;
  setOpen: () => void;
}

export function Sidebar({ open, setOpen }: Readonly<SidebarProps>) {
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="Sidebar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="Sidebar__container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <ul className="Sidebar__list">
                {links.map(({ name, to, id }) => (
                  <motion.li
                    className="Sidebar__link"
                    key={id}
                    whileHover={{ color: "pink" }}
                    variants={itemVariants}
                    onTap={setOpen}
                  >
                    <a href={to}>{name}</a>
                  </motion.li>
                ))}
              </ul>
              <motion.button onTap={setOpen} variants={itemVariants} className="Sidebar__button">
                <MenuClose />
              </motion.button>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
