const Navbar = () => {
  return (
    <nav className="flex justify-between p-10">
      <p className="text-secondaryColor border-[1px] border-secondaryColor rounded-3xl px-4 py-2.5 font-semibold">
        H{" "}
      </p>
      <ul className="flex gap-6 items-center">
        <li className="nav-links">
          <span className="text-secondaryColor">01.</span> About
        </li>
        <li className="nav-links">
          <span className="text-secondaryColor">02.</span> Experience
        </li>
        <li>
          <span className="text-secondaryColor">03.</span> Work
        </li>
        <li className="nav-links">
          <span className="text-secondaryColor">04.</span> Contact
        </li>
        <li className="text-secondaryColor">
          <button className="border-[1px] border-secondaryColor p-2 rounded">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
