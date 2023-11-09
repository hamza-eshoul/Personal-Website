import { useState } from "react";

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
  const [language, setLanguage] = useState("French");

  return (
    <>
      <div className="min-h-screen bg-primaryColor font-sans leading-[1.3] text-tertiaryColor antialiased">
        <Navbar language={language} setLanguage={setLanguage} />

        <main className="mx-auto max-w-5xl">
          <Home language={language} />

          <AboutMe language={language} />
          <Skills language={language} />

          <Projects language={language} />
          <NoteworthyProjects language={language} />

          <Contact language={language} />
          <Footer language={language} />

          <SocialLinks />
          <EmailLink />
        </main>
      </div>
    </>
  );
};

export default App;
