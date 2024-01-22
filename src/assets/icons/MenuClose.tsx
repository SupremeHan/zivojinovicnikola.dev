import { SVGProps } from "react";

const MenuClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      y1="-1.5"
      x2="42.1541"
      y2="-1.5"
      transform="matrix(0.69189 -0.722003 0.69189 0.722003 2.83398 33.4353)"
      stroke="black"
      stroke-width="3"
    />
    <line
      y1="-1.5"
      x2="42.1541"
      y2="-1.5"
      transform="matrix(0.69189 0.722003 -0.69189 0.722003 2 3.56458)"
      stroke="black"
      stroke-width="3"
    />
  </svg>
);
export default MenuClose;
