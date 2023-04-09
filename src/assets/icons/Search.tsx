import * as React from "react";

const SearchIcon = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g id="Interface / Search_Magnifying_Glass">
        <path
          // fill={color}
          id="Vector"
          fillRule="evenodd"
          d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
