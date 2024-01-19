import { PropsWithChildren } from "react";
import "./IconWrapper.scss";

export function IconWrapper({ children }: PropsWithChildren) {
  return <div className="IconWrapper">{children}</div>;
}
