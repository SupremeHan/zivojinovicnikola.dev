import classNames from "classnames";
import RightArrow from "../../assets/icons/RightArrow";
import "./Button.scss";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type ButtonSizeType = "small" | "medium" | "large";
type ButtonType = "outlined" | "filled";

interface ButtonProps {
  size?: ButtonSizeType;
  type?: ButtonType;
  withIcon?: boolean;
}

export function Button({
  children,
  size = "small",
  type = "outlined",
  withIcon = false,
}: Readonly<PropsWithChildren<ButtonProps>>) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className={classNames("Button", `Button--${size} Button--${type}`)}
    >
      {children}
      {withIcon ? (
        <span>
          <RightArrow />
        </span>
      ) : null}
    </motion.button>
  );
}
