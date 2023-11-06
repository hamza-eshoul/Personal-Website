const Logo = () => {
  return (
    <div className={`group relative cursor-pointer`}>
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 84 96"
        className="logo-svg transition-translate duration-200 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
      >
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <polygon
              id="Shape"
              stroke="#64ffda"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            ></polygon>
          </g>
        </g>
      </svg>
      <span className="absolute bottom-0 left-0 right-0 top-0 z-20 font-mono text-xl text-secondaryColor">
        H{" "}
      </span>

      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 84 96"
        className="logo-svg-background transition-translate duration-100 ease-in-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <polygon
              id="Shape"
              stroke="#64ffda"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            ></polygon>
          </g>
        </g>
      </svg>
    </div>

    // <div className="relative">
    // <svg
    //   id="logo"
    //   xmlns="http://www.w3.org/2000/svg"
    //   role="img"
    //   viewBox="0 0 84 96"
    //   className="logo-svg"
    // >
    //   <title>Logo</title>
    //   <g transform="translate(-8.000000, -2.000000)">
    //     <g transform="translate(11.000000, 5.000000)">
    //       <polygon
    //         id="Shape"
    //         stroke="#64ffda"
    //         stroke-width="5"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         points="39 0 0 22 0 67 39 90 78 68 78 23"
    //       ></polygon>
    //     </g>
    //   </g>
    // </svg>
    //   <span className="absolute right-[15px] top-2.5 font-mono text-xl text-secondaryColor">
    //     H
    //   </span>
    // </div>
  );
};

export default Logo;
