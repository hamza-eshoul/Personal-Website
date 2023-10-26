const Home = () => {
  return (
    <div className="max-w-5xl mx-auto pt-[100px]">
      <p className="text-secondaryColor">Hi, my name is</p>
      <p className="text-lightestTertiaryColor font-semibold text-[80px]">
        Hamza Eshoul.
      </p>
      <p className="font-semibold text-[80px]">I build things for the web.</p>
      <p className="w-1/2 text-justify leading-8">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <span className="text-secondaryColor">Upstatement.</span>
      </p>

      <button className="text-secondaryColor border-[1px] border-secondaryColor p-4 rounded mt-10">
        Get In Touch
      </button>
    </div>
  );
};

export default Home;
