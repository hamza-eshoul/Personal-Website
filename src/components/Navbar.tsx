// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// let oldScrollY: number = 0;

// type scrollDirection = "up" | "down";

// const Navbar = () => {
//   // local state
//   const [scrollDirection, setScrollDirection] = useState<scrollDirection>("up");
//   const { ref, inView } = useInView();

//   // data
//   const sectionReferences = {
//     aboutMeRef: document.querySelector("#aboutMe"),
//     skillsRef: document.querySelector("#skills"),
//     projectsRef: document.querySelector("#projects"),
//     contactRef: document.querySelector("#contact"),
//   };

//   const nav_items = [
//     {
//       number: "01.",
//       french_title: "À propos",
//       english_title: "About",
//       sectionRef: sectionReferences.aboutMeRef,
//     },
//     {
//       number: "02.",
//       french_title: "Compétences",
//       english_title: "Skills",
//       sectionRef: sectionReferences.skillsRef,
//     },
//     {
//       number: "03.",
//       french_title: "Projets",
//       english_title: "Projects",
//       sectionRef: sectionReferences.projectsRef,
//     },
//     {
//       number: "04.",
//       french_title: "Contact",
//       english_title: "Contact",
//       sectionRef: sectionReferences.contactRef,
//     },
//   ];

//   // functions
//   const scrollToSection = (sectionRef) => {
//     sectionRef.scrollIntoView({ behavior: "smooth" });
//   };

//   const controlDirection = () => {
//     if (window.scrollY < 50) {
//       return;
//     }
//     if (window.scrollY > oldScrollY) {
//       setScrollDirection("down");
//     } else {
//       setScrollDirection("up");
//     }
//     oldScrollY = window.scrollY;
//   };

//   // library hooks
//   useEffect(() => {
//     window.addEventListener("scroll", controlDirection);

//     return () => {
//       window.removeEventListener("scroll", controlDirection);
//     };
//   }, []);

//   return <div>Navbar</div>;
// };

// export default Navbar;
