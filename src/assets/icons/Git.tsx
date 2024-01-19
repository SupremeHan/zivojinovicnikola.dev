import { SVGProps } from "react";

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 70 70"
    fill="none"
    {...props}
  >
    <path
      fill="#DE4C36"
      fillRule="evenodd"
      d="M68.68 31.882 38.117 1.32a4.508 4.508 0 0 0-6.375 0l-6.347 6.347 8.051 8.05a5.351 5.351 0 0 1 6.78 6.826l7.759 7.759a5.356 5.356 0 0 1 5.542 1.273 5.363 5.363 0 0 1 0 7.586 5.364 5.364 0 0 1-8.755-5.835l-7.236-7.236v19.042a5.364 5.364 0 1 1-4.41-.156V25.757a5.363 5.363 0 0 1-2.912-7.035l-7.937-7.937L1.321 31.74a4.51 4.51 0 0 0 0 6.378L31.884 68.68a4.509 4.509 0 0 0 6.376 0l30.42-30.42a4.511 4.511 0 0 0 0-6.378Z"
      clipRule="evenodd"
    />
  </svg>
);
export default GitIcon;
