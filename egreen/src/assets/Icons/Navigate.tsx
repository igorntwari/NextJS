import React from "react";

const Navigate = ({ className = "" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.833313"
        y="0.416656"
        width="31.1667"
        height="31.1667"
        rx="15.5833"
        fill="white"
        fill-opacity="0.8"
      />
      <path
        d="M12.875 19.5417L19.9583 12.4583M19.9583 12.4583H12.875M19.9583 12.4583V19.5417"
        stroke="black"
        stroke-width="1.41667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Navigate;
