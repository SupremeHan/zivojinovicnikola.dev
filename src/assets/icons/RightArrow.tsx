import { SVGProps } from "react";

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#333"
      d="m20 12 .354-.354.353.354-.353.354L20 12Zm-15 .5a.5.5 0 0 1 0-1v1Zm9.354-6.854 6 6-.708.708-6-6 .708-.708Zm6 6.708-6 6-.708-.708 6-6 .708.708ZM20 12.5H5v-1h15v1Z"
    />
  </svg>
);
export default RightArrow;
