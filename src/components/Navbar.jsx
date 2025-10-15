import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "contact", title: "Contact" },
  ];

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav className="fixed w-full top-0 p-4 flex justify-between items-center">
      <a href="#home" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
        <p>Velvet Pour</p>
      </a>

      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
