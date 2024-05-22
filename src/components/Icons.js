import * as React from "react"
export const FacabookIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="#3B5998"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    viewBox="0 0 1024 1024"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <circle
      cx={512}
      cy={512}
      r={512}
      style={{
        fill: "#e4405f",
      }}
    />
    <path
      d="M512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3l1 .7zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5S439.4 643.5 512 643.5 643.5 584.6 643.5 512 584.6 380.5 512 380.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);
export const LinkedinIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="#0077b5"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm-4.504 5.403c.842 0 1.403.561 1.403 1.309 0 .748-.561 1.309-1.496 1.309C9.561 11.022 9 10.46 9 9.712c0-.748.561-1.309 1.496-1.309zM12 20H9v-8h3v8zm10 0h-2.824v-4.372c0-1.209-.753-1.488-1.035-1.488s-1.224.186-1.224 1.488V20H14v-8h2.918v1.116c.376-.651 1.129-1.116 2.541-1.116S22 13.116 22 15.628V20z" />
  </svg>
);
export const GitlabIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    aria-label="GitLab"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <rect width={512} height={512} fill="#000000" rx="50%" />
    <path
      fill="#e24329"
      d="m84 215 43-133c2-7 12-7 14 0l115 353L371 82c2-7 12-7 14 0l43 133"
    />
    <path
      fill="#fc6d26"
      d="M256 435 84 215h100.4zm71.7-220H428L256 435l71.6-220z"
    />
    <path
      fill="#fca326"
      d="m84 215-22 67c-2 6 0 13 6 16l188 137zm344 0 22 67c2 6 0 13-6 16L256 435z"
    />
  </svg>
);
export const DownIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122.3.3.662.497 1.121.627"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v13m0 0-3-3.5m3 3.5 3-3.5"
    />
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg version="1.1" viewBox="0 0 1600 1584" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
    <path transform="translate(698,54)" d="m0 0h24v2h4v-2h4v2h2v-2h6v2h2v72h-2v44h-2v4h2v6h-2v44h-2v10h-4v2h-10v2h-12v2h-10v2h-6v-2h-2v-4h-2v-6h-2v-10h-2v-6h-2v-10h-2v-8h-6v32h-2v16h-2v2h-10v2h-10v2h-12v2h-14v-6h-2v-8h-2v-6h-2v-8h-2v-8h-2v-8h-2v-8h-2v-6h-2v-8h-2v-8h-2v-6h-2v-8h-2v-8h-2v-10h-2v-6h-2v-8h-2v-10h-2v-8h-2v-8h-2v-10h-2v-10h-2v-4h2v-2h4v-2h12v-2h8v-2h14v2h2v12h2v10h2v8h2v6h2v6h2v6h4v-24h2v-30h2v-2h2v-2h4v-2h8v-2h10v-2h8v2h4v2h2v4h2v6h2v4h2v8h2v6h2v8h2v4h2v2h2v-28h2v-26zm10 128v2h2v2h4v-2h-2v-2h-4zm0 22v4h2v-4h-2zm2 20v4h10v-2h-2v-2h-8z" fill="#000002" />
    <path transform="translate(994,82)" d="m0 0h2v2h6v2h10v2h6v2h10v2h8v2h8v2h6v2h8v2h4v2h6v2h4v2h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v4h2v6h2v20h-2v6h-2v4h-2v4h-2v4h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-6v2h-4v2h-2v2h2v4h2v6h2v24h-2v4h-2v4h-2v4h-2v4h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-10v2h-6v-2h-2v2h-4v-2h-14v-2h-6v-2h-6v-2h-6v-2h-4v-2h-4v-2h-6v-2h-6v-2h-4v-2h-6v-2h-6v-2h-4v-2h-6v-2h-4v-2h-4v-6h2v-4h2v-4h2v-6h2v-4h2v-4h2v-4h2v-4h2v-6h2v-4h2v-4h2v-4h2v-4h2v-4h2v-6h2v-4h2v-4h2v-4h2v-4h2v-4h2v-4h2v-6h2v-4h2v-4h2v-6h2v-4h2v-4h2v-4h2v-4h2v-6h2v-4h2v-2h2v-6h2v-4h2v-4h2v-4h4v-2zm20 52v2h-2v2h-2v4h-2v4h-2v12h28v-2h4v-2h2v-2h2v-10h-2v-2h-2v-2h-4v-2h-6v-2h-14zm-24 62v2h-4v2h-2v2h-2v6h-2v10h2v2h4v2h12v-2h6v-2h2v-2h4v-2h2v-4h2v-8h-2v-2h-4v-2h-6v-2h-12zm-30 36v6h6v-4h-2v-2h-4z" fill="#000002" />
    <path transform="translate(808,52)" d="m0 0h46v2h48v2h24v2h2v6h-2v16h-2v16h-2v2h-2v2h-66v-2h-6v2h-4v10h-2v12h36v2h22v2h2v6h-2v22h-2v8h-36v2h-24v2h-2v2h-2v8h-2v10h18v2h32v2h22v2h4v10h-2v24h-2v8h-10v2h-2v-2h-38v-2h-42v-2h-28v-2h-2v-18h2v-16h2v-16h2v-16h2v-12h2v-16h2v-12h2v-14h2v-10h2v-10h2v-10h2v-10h2v-12h2v-4z" fill="#000002" />
    <path transform="translate(1052,1270)" d="m0 0h8v6h2v8h2v6h2v6h2v8h2v8h2v8h2v6h2v8h2v6h2v8h2v6h2v6h2v8h2v4h2v8h2v6h2v6h2v8h2v6h2v8h2v6h2v8h2v10h-2v2h-4v2h-4v2h-4v2h-4v2h-2v2h-6v2h-2v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-6v2h-6v2h-8v2h-26v-2h-4v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-4h-2v-4h-2v-4h-2v-6h-2v-8h-2v-24h2v-8h2v-6h2v-4h2v-4h2v-8h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-4h-4v-2h-2v-4h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h6v2h2v4h2v2h2v2h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v2h2v2h2v2h2v2h2v2h2v2h10v-2h4v-4h2v-4h-2v-8h-2v-8h-2v-6h-2v-4h-2v-6h-2v-6h-2v-4h-2v-6h4v-2h6v-2h6v-2h4v-2h6v-2h4v-2h4v-2zm-10 110v2h-4v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v4h-2v4h-2v6h-2v10h2v6h2v2h2v2h4v2h2v-2h4v-2h4v-2h4v-2h2v-2h4v-2h2v-2h2v-2h2v-10h-2v-8h-2v-6h-2v-8h-2v-2h-2v-2h-4z" fill="#000002" />
    <path transform="translate(1168,1188)" d="m0 0h2v2h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v4h2v2h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v2h2v4h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h-2v4h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-4v-2h-2v-2h-2v-4h-2v-2h-2v-4h-2v-4h-2v-2h-2v-2h-2v-4h-2v-4h-2v-6h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-4h2v-4h-2v-4h-2v-4h-2v-4h-8v2h-4v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-4v-2h-4v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-6h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-10h-2v-4h-2v-4h-2v-2h-8v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-4v2h-6v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-6h2v-2h2v-2h4v-2h2v-2h4v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2z" fill="#000002" />
    <path transform="translate(1382,352)" d="m0 0h6v2h2v2h2v4h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v4h-2v2h-4v2h-4v2h-4v2h-2v2h-4v2h-4v2h-2v2h-4v2h-6v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-8v2h-2v2h-4v2h-4v2h-2v4h2v2h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v4h-2v2h-2v2h-4v2h-2v2h-4v2h-2v2h-4v2h-2v2h-4v2h-4v-2h-4v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v2h-4v2h-4v2h-4v2h-4v6h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v4h2v2h2v4h2v6h-2v2h-4v2h-2v2h-4v2h-2v2h-4v2h-4v2h-2v2h-2v2h-6v2h-4v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-2h-2v-8h2v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2z" fill="#000002" />
    <path transform="translate(1344,694)" d="m0 0h90v2h48v2h38v2h2v14h2v36h2v32h2v34h2v2h-2v2h-36v-2h-4v-8h-2v-14h-2v-16h-2v-18h-2v-18h-2v-2h-2v-2h-18v2h-2v10h2v32h2v16h-2v2h-34v-2h-2v-10h-2v-14h-2v-12h-2v-16h-2v-8h-6v-2h-16v2h-2v2h2v38h2v36h-22v2h-20v-8h-2v-20h-2v-26h-2v-28h-2v-30h-2v-10h2v-2z" fill="#000002" />
    <path transform="translate(150,460)" d="m0 0h28v2h12v2h10v2h10v2h10v2h10v2h6v2h10v2h8v2h8v2h6v2h8v2h8v2h8v2h8v2h8v2h6v2h10v2h4v4h-2v4h-2v4h-2v4h-2v6h-2v4h-2v4h-2v4h-2v4h-2v4h-2v4h-6v-2h-6v-2h-6v-2h-6v-2h-6v-2h-6v6h-2v12h-2v6h-2v10h-2v2h2v6h4v2h2v2h2v2h2v2h4v2h2v2h4v6h-2v4h-2v4h-2v4h-2v4h-2v4h-2v6h-2v4h-2v4h-2v4h-2v2h-4v-2h-4v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-4h-2v-12h2v-8h2v-4h2v-6h2v-4h2v-2h2v-4h2v-2h4v-2h2v-2zm128 42v8h4v2h6v2h4v-2h6v-2h2v-2h2v-2h-2v-2h-6v-2h-16zm-80 10v4h2v2h2v2h2v2h2v2h2v2h4v2h2v2h4v2h2v2h2v2h2v2h2v-2h2v-2h2v-4h2v-4h2v-2h-2v-2h-2v-2h-4v-2h-6v-2h-6v-2h-6v-2h-10zm16 28v2h2v-2h-2zm2 2v4h2v2h2v-4h-2v-2h-2z" fill="#000002" />
    <path transform="translate(1254,224)" d="m0 0h10v2h2v2h4v2h4v2h2v2h4v2h4v2h4v2h2v2h4v2h2v2h2v2h2v2h4v2h2v2h2v2h2v2h2v4h2v2h2v2h2v4h2v2h2v4h2v6h2v12h2v2h-2v16h-2v4h-2v6h-2v2h-2v4h-2v4h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v4h-4v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-4v2h-4v2h-2v2h-6v2h-4v2h-6v2h-6v2h-8v2h-12v2h-24v-2h-8v-2h-6v-2h-4v-2h-4v-2h-2v-2h-4v-2h-2v-2h-4v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2zm2 54v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-2v4h2v2h4v2h4v2h6v2h10v-2h8v-2h6v-2h6v-2h4v-2h4v-2h2v-2h4v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-4h2v-2h2v-4h2v-14h-2v-2h-2v-4h-2v-2h-4v-2h-2v-2h-12z" fill="#000002" />
    <path transform="translate(400,162)" d="m0 0h6v2h12v2h14v2h8v2h2v8h-2v26h-2v22h-2v24h4v2h6v2h6v2h4v2h8v2h4v2h6v2h4v2h6v2h6v2h6v2h6v2h8v2h2v10h-2v10h-2v8h-2v6h-2v10h-8v-2h-6v-2h-6v-2h-6v-2h-6v-2h-4v-2h-8v-2h-6v-2h-6v-2h-4v-2h-8v-2h-6v-2h-4v-2h-4v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v2h2v4h2v2h2v4h2v2h2v2h2v2h2v4h2v2h2v2h2v8h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v-2h-4v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-4h-2v-2h-2v-4h-2v-2h-2v-4h-2v-4h-2v-4h-2v-2h-2v-4h-2v-4h-2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h4v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h4v2h2v2h2v4h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v2h2v2h2v2h2v-16h2v-16h2v-14h2v-14h2v-18h2v-2z" fill="#000002" />
    <path transform="translate(446,1222)" d="m0 0h22v2h6v2h6v2h4v2h6v2h2v2h4v2h2v2h4v2h2v2h2v2h4v2h2v2h2v2h2v2h2v4h2v2h2v4h2v4h2v24h-2v4h-2v4h-2v4h-2v4h-2v4h-2v2h-2v4h-2v2h-2v4h-2v2h-2v4h-2v2h-2v4h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v-2h-2v-2h-4v-2h-2v-2h-4v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-4h2v-2h2v-8h2v-4h-2v-4h-2v-4h-2v-2h-4v-2h-12v2h-6v2h-2v2h-4v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v4h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-8v-2h-2v-2h-2v-2h-4v-2h-2v-2h-4v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h4v-2h4v-2h6v-2h6v-2z" fill="#000002" />
    <path transform="translate(1334,976)" d="m0 0h20v2h10v2h8v2h6v2h4v2h4v2h4v2h4v2h4v2h4v2h4v2h4v2h2v2h2v2h4v2h2v2h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v4h2v2h2v4h2v4h2v4h2v6h2v6h2v24h-2v6h-2v4h-2v4h-2v4h-2v2h-2v2h-2v4h-2v2h-2v2h-4v2h-2v2h-4v2h-4v2h-6v2h-10v2h-14v-2h-12v-2h-8v-2h-6v-2h-6v-2h-4v-2h-4v-2h-4v-2h-4v-2h-4v-2h-4v-2h-4v-2h-2v-2h-4v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-4h-2v-4h-2v-4h-2v-8h-2v-28h2v-6h2v-4h2v-4h2v-4h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h4v-2h6v-2h8v-2zm2 44v2h-2v4h-2v6h-2v4h2v4h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v2h2v2h2v2h4v2h2v2h4v2h2v2h4v2h4v2h4v2h4v2h4v2h4v2h6v2h6v2h10v2h2v-2h6v-2h2v-12h-2v-2h-2v-4h-2v-2h-2v-4h-4v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-4v-2h-4v-2h-2v-2h-4v-2h-2v-2h-4v-2h-4v-2h-2v-2h-4v-2h-4v-2h-4v-2h-4v-2h-6v-2h-6v-2h-10z" fill="#000002" />
    <path transform="translate(272,286)" d="m0 0h18v2h6v2h6v2h2v2h4v2h2v2h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v4h2v10h-4v4h-2v2h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v-2h-2v-2h-4v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-8v4h-2v16h2v6h2v6h2v4h2v2h2v4h2v2h2v4h2v2h2v4h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v2h4v2h2v2h4v2h6v2h4v2h8v-2h2v-2h2v-2h2v-4h2v-8h2v-2h-2v-12h-2v-6h-2v-6h-2v-6h-2v-8h4v-2h28v2h2v6h2v4h2v6h2v6h2v8h2v28h-2v6h-2v4h-2v4h-2v4h-2v4h-2v2h-2v2h-2v2h-2v4h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-4v2h-16v2h-4v-2h-14v-2h-6v-2h-6v-2h-4v-2h-4v-2h-4v-2h-2v-2h-4v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-4h-2v-2h-2v-4h-2v-6h-2v-4h-2v-4h-2v-6h-2v-8h-2v-10h-2v-24h2v-8h2v-4h2v-4h2v-4h2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h4v-2h2v-2h4v-2h4v-2h4v-2h6v-2z" fill="#000002" />
    <path transform="translate(1258,1080)" d="m0 0h6v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v4h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h4v2h2v2h2v2h2v4h-2v4h-2v4h-2v2h-2v4h-2v4h-2v4h-2v4h-2v4h-2v2h-2v4h-2v4h-2v4h-2v2h-2v4h-2v2h-2v4h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-6v2h-26v-2h-8v-2h-4v-2h-4v-2h-2v-2h-4v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-4h-2v-4h-2v-6h-2v-6h-2v-22h2v-8h2v-6h2v-4h2v-6h2v-4h2v-4h2v-4h2v-4h2v-4h2v-4h2v-8h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-4h-4v-2h-2v-2h-2v-2h-2v-2h-2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-4zm0 10v6h2v4h2v2h2v2h4v2h2v2h2v2h4v2h2v2h2v2h4v2h4v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-6zm42 90v2h-2v6h-2v4h-2v6h-2v18h2v6h2v2h2v2h4v2h2v2h6v2h6v-2h4v-2h2v-2h2v-4h2v-2h2v-4h2v-6h2v-2h-2v-4h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-6z" fill="#000002" />
    <path transform="translate(1472,502)" d="m0 0h4v2h2v6h2v8h2v6h2v6h2v6h2v4h-2v2h-2v2h-2v2h-4v2h-4v2h-2v2h-4v2h-4v2h-2v2h-4v2h-4v2h-2v2h-4v2h-4v2h-4v2h-4v2h-2v2h-4v2h-2v2h-4v2h-4v2h-4v2h-2v2h-4v2h-4v2h-2v2h4v2h2v-2h38v2h48v2h12v28h-2v10h-2v2h-76v-2h-102v-2h-2v-6h-2v-6h-2v-6h-2v-8h-2v-4h-2v-6h-2v-6h2v-2h2v-2h4v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2h4v-2h4v-2h4v-2h4v-2h2v-2h6v-2h2v-2h4v-2z" fill="#000002" />
    <path transform="translate(192,788)" d="m0 0h20v2h10v2h4v2h4v2h4v2h2v2h4v2h2v4h2v2h2v2h2v4h2v4h2v6h2v6h2v10h2v24h-2v8h-2v6h-2v6h-2v6h-2v6h-2v6h-10v-2h-6v-2h-4v-2h-6v-2h-4v-2h-4v-2h-2v-4h2v-6h2v-4h2v-6h2v-4h2v-6h2v-16h-2v-2h-2v-2h-2v-2h-14v2h-2v2h-2v2h-2v4h-2v2h-2v4h-2v4h-2v4h-2v4h-2v2h-2v4h-2v4h-2v4h-2v2h-2v4h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-4v2h-4v2h-12v2h-12v-2h-12v-2h-6v-2h-4v-2h-4v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-4h-2v-4h-2v-6h-2v-6h-2v-34h2v-4h2v-4h2v-4h2v-2h2v-2h2v-2h2v-2h4v-2h6v-2h6v-2h20v-2h2v2h6v2h2v12h2v24h-2v2h-6v2h-16v2h-4v8h2v2h2v2h2v2h4v2h12v-2h4v-2h4v-2h2v-2h2v-4h2v-2h2v-4h2v-4h2v-4h2v-4h2v-4h2v-4h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h4v-2h6v-2z" fill="#000002" />
    <path transform="translate(624,1302)" d="m0 0h4v2h6v2h8v2h6v2h8v2h8v2h2v6h-2v6h-2v6h-2v6h-2v6h-2v4h-2v6h-2v4h-2v4h-2v6h-2v4h-2v4h-2v6h-2v2h-2v6h-2v4h-2v6h-2v2h-2v6h-2v4h-2v6h-2v2h-2v6h-2v4h-2v4h-2v4h-2v4h-2v4h-2v4h-2v4h-2v4h-2v4h-2v4h-2v2h-2v4h-2v4h-2v2h-8v-2h-4v-2h-8v-2h-6v-2h-6v-2h-6v-2h-8v-2h-6v-2h-6v-2h-6v-2h-6v-2h-6v-2h-4v-2h-6v-2h-6v-2h-6v-2h-4v-2h-2v-8h2v-4h2v-4h2v-6h2v-4h2v-6h2v-4h2v-2h2v2h8v2h8v2h10v2h8v2h8v2h10v2h6v2h8v2h2v-2h2v-2h2v-4h2v-4h2v-4h2v-4h2v-8h-4v-2h-6v-2h-6v-2h-6v-2h-6v-2h-6v-2h-6v-2h-4v-2h-8v-2h-4v-6h2v-6h2v-4h2v-4h2v-6h2v-4h2v-6h2v-2h6v2h6v2h8v2h10v2h10v2h8v2h8v2h2v-2h4v-4h2v-6h2v-4h2v-6h2v-4h2v-6h2v-6h2v-6h2v-6h2v-2z" fill="#000002" />
    <path transform="translate(86,616)" d="m0 0h10v2h12v2h10v2h8v12h-2v16h-2v12h4v2h12v2h12v2h12v2h10v2h10v2h10v2h10v2h8v2h8v2h12v2h10v2h10v2h10v18h-2v14h-2v10h-2v4h-2v-2h-8v-2h-10v-2h-10v-2h-14v-2h-16v-2h-12v-2h-10v-2h-12v-2h-12v-2h-10v-2h-10v-2h-6v-2h-2v2h-2v4h2v38h-14v-2h-10v-2h-10v-2h-10v-2h-4v-2h-2v-2h2v-20h2v-16h2v-16h2v-16h2v-16h2v-18h2v-16h2v-6z" fill="#000002" />
    <path transform="translate(1346,834)" d="m0 0h4v2h6v2h6v2h8v2h8v2h8v2h8v2h6v2h8v2h10v2h8v2h6v2h8v2h8v2h8v2h8v2h6v2h8v2h8v2h6v2h8v2h6v2h8v2h6v2h2v8h-2v10h-2v10h-2v8h-2v6h-10v-2h-8v-2h-8v-2h-8v-2h-8v-2h-6v-2h-8v-2h-8v-2h-6v-2h-8v-2h-6v-2h-8v-2h-8v-2h-6v-2h-6v-2h-6v-2h-8v2h-2v12h-2v6h-2v12h-2v8h-2v10h-2v6h-2v8h-8v-2h-8v-2h-10v-2h-8v-2h-8v-2h-4v-2h-2v-6h2v-14h2v-12h2v-12h2v-12h2v-10h2v-12h2v-12h2v-10h2v-8h2v-2z" fill="#000002" />
    <path transform="translate(288,998)" d="m0 0h4v2h2v4h2v2h2v6h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h2v4h2v4h2v2h-2v2h-2v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-6v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-6v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-6v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-4v2h-6v2h-2v-2h-2v-2h-2v-4h-2v-4h-2v-4h-2v-6h-2v-2h-2v-4h-2v-4h-2v-4h-2v-2h2v-2h2v-2h4v-2h2v-2h4v-2h6v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h6v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h6v-2h4v-2h4v-4h-2v-4h-2v-4h-2v-4h-2v-4h-2v-4h-2v-4h-2v-4h-2v-2h-2v-4h-2v-4h-2v-4h-2v-4h-2v-4h-2v-8h2v-2h6v-2h4v-2h4v-2h4v-2h4v-2h4v-2h4v-2h2v-2h4v-2z" fill="#000002" />
    <path transform="translate(350,1108)" d="m0 0h6v2h2v2h2v4h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v4h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-6v-4h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h2v-4h2v-2h4v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h2v-2h2v-2h2v-2h4v-2h2v-2z" fill="#000002" />
    <path transform="translate(794,1328)" d="m0 0h14v2h4v2h4v2h2v2h2v2h2v2h2v4h2v14h-2v4h-2v4h-2v2h-2v2h-2v2h-4v2h-6v2h-6v-2h-10v-2h-2v-2h-2v-2h-2v-2h-2v-4h-2v-4h-2v-12h2v-4h2v-4h2v-2h2v-2h2v-2h2v-2h4v-2z" fill="#000002" />
  </svg>
);
