import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import AboutMe from "./components/AboutMe.Jsx";

const App = () => {
  return (
    <>
      <div className="bg-primaryColor min-h-screen text-tertiaryColor">
        <Navbar />
        <Home />

        <AboutMe />

        <SocialLinks />
        <EmailLink />
      </div>
    </>
  );
};

export default App;
