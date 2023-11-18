import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="fixed top-0 right-0 w-screen h-screen -z-30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlink="http://www.w3.org/1999/xlink"
        svgjs="http://svgjs.dev/svgjs"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
        className="md:hidden"
      >
        <g mask='url("#SvgjsMask1002")' fill="none">
          <path
            d="M1598.35 506.9C1419.77 505.71 1275.39 347.73 904.04 338.9 532.7 330.07 405.04-11.08 209.74-21.61"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M1491.01 239.59C1305.97 240.7 1048.85 409.66 770.14 407.59 491.43 405.52 544.45 13.21 409.71-31.96"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M1582.68 433.58C1460.82 421.92 1405.26 178.38 1173.39 164.78 941.52 151.18 874.9-2.45 764.1-5.82"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M1583.84 175.2C1478.86 174.95 1376.81 105.2 1169.78 105.2 962.75 105.2 965.53 175.65 755.71 175.2 545.9 174.75 457.16-25.41 341.65-31.01"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M1576.92 451.86C1407.06 449.14 1273.93 245.8 931.59 239.06 589.25 232.32 458.83-2.41 286.26-6.51"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1002">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlink="http://www.w3.org/1999/xlink"
        svgjs="http://svgjs.dev/svgjs"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1007")' fill="none">
          <path
            d="M1653.79 404.34C1480.11 402.49 1335.62 218.77 985.63 213.94 635.65 209.11 493.89-10.27 317.48-13.35"
            className="stroke-neutral-900"
            strokeWidth="2"
          ></path>
          <path
            d="M1560.23 169.43C1381.98 170.62 1135.31 339.45 867.3 337.43 599.3 335.41 651.4-47.95 520.84-93.15"
            className="stroke-neutral-900"
            strokeWidth="2"
          ></path>
          <path
            d="M1555.86 175.79C1413.87 181.22 1239.25 412.76 1038.42 410.99 837.59 409.22 891.17 31.72 779.7-31.5"
            className="stroke-neutral-900"
            strokeWidth="2"
          ></path>
          <path
            d="M1468.44 74.69C1327.58 83.71 1163.99 349.9 975.02 349.09 786.05 348.28 835.2-17.01 728.31-78.85"
            className="stroke-neutral-900"
            strokeWidth="2"
          ></path>
          <path
            d="M1465.52 223.54C1293.26 225.25 1143.96 410.9 801.69 408.34 459.42 405.78 346.46-81.25 137.86-110.84"
            className="stroke-neutral-900"
            strokeWidth="2"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1007">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlink="http://www.w3.org/1999/xlink"
        svgjs="http://svgjs.dev/svgjs"
        preserveAspectRatio="none"
        viewBox="0 0 640 560"
        className="hidden md:block"
      >
        <g mask='url("#SvgjsMask1021")' fill="none">
          <path
            d="M743.17 410.3C665.01 396.68 645.06 261.83 502.81 203.1 360.56 144.37 441.38-36.02 382.63-88.67"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M666.63 34.3C572.94 50.21 491.15 282.38 377.2 280.7 263.25 279.02 305.23-31.9 232.48-104.69"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M751.28 316.85C667.32 325.64 635.19 520.31 472.39 507.25 309.6 494.19 318.75 59.04 193.51-23.2"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M758.64 557.14C683.52 549.62 688.05 440.44 507.72 389.14 327.39 337.84 360.69 50.97 256.8-0.17"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
          <path
            d="M750.52 285.02C696.23 284.07 647.73 215.02 544.93 215.02 442.14 215.02 455.71 291.78 339.34 285.02 222.97 278.26 215.5 29.95 133.75-4.8"
            className="stroke-neutral-800"
            strokeWidth="2"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1021">
            <rect width="640" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default Background;
