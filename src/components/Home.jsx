const Home = () => {
  return (
    <div className="mx-auto max-w-5xl pl-2.5 pt-[205px]">
      <p className="font-mono text-secondaryColor">Hi, my name is</p>
      <p className="-translate-x-1 pt-5 text-[80px] font-semibold text-lightestTertiaryColor">
        Brittany Chiang.
      </p>
      <p className="-translate-x-1 -translate-y-4  text-[80px] font-semibold">
        I build things for the web.
      </p>

      <p className="w-[540px] -translate-x-1 -translate-y-3 text-[20px] font-normal">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <span className="text-secondaryColor">Upstatement.</span>
      </p>

      <div className="group relative h-[48px] w-[170px]">
        <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
          Get in touch!
        </button>
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
      </div>
    </div>
  );
};

export default Home;
