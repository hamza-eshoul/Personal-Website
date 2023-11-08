import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import AboutMe from "./components/AboutMe.Jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import NoteworthyProjects from "./components/NoteworthyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-primaryColor font-sans leading-[1.3] text-tertiaryColor antialiased">
        <Navbar />

        <main className="mx-auto max-w-5xl">
          <Home />

          <AboutMe />
          <Skills />

          <Projects />
          <NoteworthyProjects />

          <Contact />
          <Footer />

          <SocialLinks />
          <EmailLink />
        </main>
      </div>
    </>
  );
};

export default App;
