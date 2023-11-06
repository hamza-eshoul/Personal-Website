import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-[50px] py-[26px] font-mono">
      <Logo />

      <ul className="flex items-center gap-9">
        <li className="nav-links">
          <span className=" text-[12px] text-secondaryColor">01.</span> About
        </li>
        <li className="nav-links">
          <span className="text-[12px] text-secondaryColor">02.</span>{" "}
          Experience
        </li>
        <li className="nav-links">
          <span className="text-[12px] text-secondaryColor">03.</span> Work
        </li>
        <li className="nav-links">
          <span className="text-[12px] text-secondaryColor">04.</span> Contact
        </li>
        <li>
          <div className={`group relative h-[38px] w-[84px]`}>
            <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              Resume
            </button>
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
