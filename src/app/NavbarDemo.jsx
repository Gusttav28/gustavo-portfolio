"use client"

import { FlipWords } from "./components/ui/FlipWords";
import { FlipWords2 } from "./components/ui/FlipWords";
import { TracingBeamDemo } from "./components/TraicingBean"
import { NavbarSimple } from "./components/NavBarMUI2"
import { InfiniteMovingCardsDemo } from "./components/MovingIcons"
import { ProjectSectionDemo } from "./components/ui/ProjectSections"
import UnderPage from "./components/UnderPage"



export async function NavbarDemo() {
  return (
    <div className="overflow-x-hidden">
       <NavbarSimple />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  const words = ["Code wonderful tools", "", "", ""];
  const words2 = ["..", "...", "and people will have wonderful things", ""];
  return (
    <div className="overflow-x-hidden bg-black sm:p-6">
      <div className="mr-15 mt-12 sm:ml-12 text-2xl md:ml-14 lg:pl-10">
        <h1 className="ml-11 text-left text-2xl sm:text-4xl md:text-4xl lg:text-2xl xl:text-3xl font-bold">
        <FlipWords2 words={words} /> <br />
        </h1>
        <div className="ml-11">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl xl:text-3xl">
            <FlipWords words={words2} /> <br />
          </h1>
        </div>
        <div className="flex mt-6 max-w-2xl ml-10">
          <p className="flex mt-10 text-center text-xl font-light">
            Hello! My Name is Gustavo! And I'm Software Engineer student who is exited to build and to contribute growing the next generation of software development and technology industries.
          </p>
        </div>
        <div className="mt-20 ml-30 -mb-20 
        md:ml-65
        lg:-mb-10 lg:-mt-60 lg:ml-200
        xl:-mt-50 xl:ml-280 xl:-mb-10">
          <a href="/assets/GustavoCamachoCV.pdf">
            <button className="bg-neutral-500 text-white hover:scale-105 transition-transform rounded-4xl text-base font-bold p-4 md:p-6 md:text-base lg:p-6 lg:text-base xl:p-5 xl:text-sm">Download CV</button>
          </a>
        </div>
        <div>
          <h1 className="mt-50 ml-11 text-left text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold lg:mt-80">Technologies</h1>
          <InfiniteMovingCardsDemo/>
        </div>
        
        <section className="ml-11">
          <div className="mt-10 mr-20">
            <TracingBeamDemo/>
          </div>
        </section>

      </div>
      <h1 className="-mt-60 ml-11 text-left text-2xl sm:text-4xl md:text-3xl md:-mt-90 lg:text-3xl font-bold lg:-mt-130 lg:ml-35 xl:text-3xl xl:-mt-100 xl:ml-35">Projects</h1>
      <div className="flex flex-wrap ml-6 pl-4 pr-10 mt-10 lg:pl-20 lg:pr-80 lg:mr-40 lg:ml-20 lg:mt-15">
        <label className="text-neutral-400 text-sm lg:text-left lg:text-base">Build projects from scratch are really my passion, and even if of course there's not too much, I'm really working on everything I feel and I found really interesting, but let's be honest, all the software development proojects are interesting, I talk about my professional career and my educational background more in my <a className="hover:text-blue-500" href="">about section.</a> </label>
      </div>
      <section className="ml-5 lg:mt-20">
        <ProjectSectionDemo/>
      </section>
      <div>
        <UnderPage/>
        {/* <WorldMapDemo/> */}
      </div>
    </div>
  );
};
