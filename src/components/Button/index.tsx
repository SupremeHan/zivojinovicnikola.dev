import classNames from "classnames";
import RightArrow from "../../assets/icons/RightArrow";
import "./Button.scss";
import { PropsWithChildren } from "react";

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
    <button className={classNames("Button", `Button--${size} Button--${type}`)}>
      {children}
      {withIcon ? (
        <span>
          <RightArrow />
        </span>
      ) : null}
    </button>
  );
}
