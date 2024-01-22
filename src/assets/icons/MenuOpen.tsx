import { SVGProps } from "react";

const MenuOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="31"
    height="28"
    viewBox="0 0 31 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="0.5" y1="2" x2="30.5" y2="2" stroke="black" stroke-width="3" />
    <line x1="0.5" y1="14" x2="15.5" y2="14" stroke="black" stroke-width="3" />
    <line x1="0.5" y1="26" x2="30.5" y2="26" stroke="black" stroke-width="3" />
  </svg>
);
export default MenuOpen;
