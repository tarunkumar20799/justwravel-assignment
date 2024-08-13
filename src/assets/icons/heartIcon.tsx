"use client";
import { useState } from "react";

export function HeartIcon() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <svg
      className="cursor-pointer"
      onClick={handleClick}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6375 3.91857L9.99996 4.60352L9.36242 3.91857C7.6019 2.02714 4.74753 2.02714 2.98702 3.91857C1.2265 5.81 1.2265 8.87662 2.98701 10.768L8.72488 16.9326C9.42908 17.6891 10.5708 17.6891 11.275 16.9326L17.0129 10.768C18.7734 8.87661 18.7734 5.81 17.0129 3.91857C15.2524 2.02714 12.398 2.02714 10.6375 3.91857Z"
        stroke="#27398D"
        fill={liked ? "#27398D" : "#ffffff"}
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}
