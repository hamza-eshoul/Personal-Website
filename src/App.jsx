import { useState } from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/Links/SocialLinks";
import EmailLink from "./components/Links/EmailLink";
import AboutMe from "./components/AboutMe.Jsx";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import NoteworthyProjects from "./components/Projects/NoteworthyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState("French");

  console.log(AboutMe);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="min-h-screen bg-primaryColor px-[20px] font-sans leading-[1.3] text-tertiaryColor antialiased xsm:px-[25px] sm:px-[50px] xmd:px-[100px] xlg:px-40">
        <main className="mx-auto max-w-5xl">
          <Hero language={language} />

          <AboutMe language={language} />
          <Skills language={language} />

          <Projects language={language} />
          <NoteworthyProjects language={language} />

          <Contact language={language} />

          <SocialLinks />
          <EmailLink />
        </main>
        <Footer language={language} />
      </div>
    </>
  );
};

export default App;
