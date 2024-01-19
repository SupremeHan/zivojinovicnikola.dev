import { PropsWithChildren } from "react";
import "./Tooltip.scss";

interface TooltipProps {
  text: string;
}

export function Tooltip({ text, children }: Readonly<PropsWithChildren<TooltipProps>>) {
  return (
    <div className="Tooltip">
      <div className="Tooltip__child">{children}</div>

      <div className="Tooltip__content">{text}</div>
    </div>
  );
}
