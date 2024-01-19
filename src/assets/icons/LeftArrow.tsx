import { SVGProps } from "react";

const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#333"
      d="m4 12-.354-.354-.353.354.353.354L4 12Zm15 .5a.5.5 0 0 0 0-1v1ZM9.646 5.646l-6 6 .708.708 6-6-.708-.708Zm-6 6.708 6 6 .708-.708-6-6-.708.708ZM4 12.5h15v-1H4v1Z"
    />
  </svg>
);
export default LeftArrow;
