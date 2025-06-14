"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/Navbar";
import { useState } from "react";
import { FlipWords } from "./components/ui/FlipWords";
import { FlipWords2 } from "./components/ui/FlipWords";
import { TracingBeamDemo } from "./components/TraicingBean"
import { LayoutGridDemo } from "./components/LayoutGrid"
import { CardHoverEffectDemo } from "./components/HoverEffect"
import { NavbarSimple } from "./components/NavBarMUI2"
import { FlipWordsDemo } from "./components/FlipWords"
import Stack from "./components/StackIcons"
import { InfiniteMovingCardsDemo } from "./components/MovingIcons"

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
       <NavbarSimple />
      <DummyContent />
      {/* <Navbar>
        Desktop Navigation
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        Mobile Navigation
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton> 
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar> */}
      
      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  const words = ["Code wonderful tools", "", "", ""];
  const words2 = ["..", "...", "and people will have wonderful things", ""];
  return (
    <div className="overflow-x-hidden bg-black sm:p-6">
      <div className="mr-15 mt-12 sm:ml-12 text-4xl md:ml-14 lg:pl-10">
        <h1 className="ml-11 text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
        <FlipWords2 words={words} /> <br />
        </h1>
        <div className="ml-11">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            <FlipWords words={words2} /> <br />
          </h1>
        </div>
        <div className="flex mt-6 max-w-2xl ml-10">
          <p className="flex mt-10 text-center text-2xl font-light">
            Hello! My Name is Gustavo! And I'm Software Engineer student who is exited to build and to contribute growing the next generation of software development and technology industries.
          </p>
        </div>
        <div>
          <h1 className="mt-50 ml-11 text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold lg:mt-80">Technologies</h1>
          <InfiniteMovingCardsDemo/>
        </div>
        
        <section className="ml-11">
          <div className="mt-10 mr-20">
            <TracingBeamDemo/>
          </div>
        </section>

      </div>
      <h1 className="-mt-65 ml-11 text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold lg:-mt-80 lg:ml-35">Projects</h1>
      <LayoutGridDemo/>
      {/* <CardHoverEffectDemo/> */}
    </div>
  );
};
