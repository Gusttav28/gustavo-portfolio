"use client";

import { FlipWords } from "./components/ui/FlipWords";
import { FlipWords2 } from "./components/ui/FlipWords";
import { TracingBeamDemo } from "./components/TraicingBean"
import { NavbarSimple } from "./components/NavBarMUI2"
import { InfiniteMovingCardsDemo } from "./components/MovingIcons"
import { ProjectSectionDemo } from "./components/ui/ProjectSections"
import UnderPage from "./components/UnderPage"
import { documentToHtmlString } from "@contentful/rich-text-types"
import { Content } from "next/font/google";
import React, { useState, useEffect } from 'react';




export async function NavbarDemo() {


  async function api() {
    const [data, setData] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_CONTENTFUL)
          if(!response.ok){
            throw new Error(`http err ${res.status}`)
          }
          const data = await response.json()
          setData(jsonData);
          console.log("this is the data ", data)
        } catch (error) {
          console.error("error fetching data", error)
        }
      }
      fetchData()
    },[])
  }
  api()
  // async function Contentful() {
  // }
  // const res = await Contentful()
  // async function ContentFul() {
  //   const plainClient = contenful.createClient({
  //     accessToken: "J-qhv6BP1dtfJLOB0-uMQuVmkg2lX22ntVHQLnmRZWU",
  //   }, {
  //     type:'plain'})
  
  //   const enviroment = await plainClient.environment.get({
  //     spaceId:'f20l8i6up4k5',
  //     environmentId:"master", 
  //   })

  //   const scopedPlainClient = contentful.createClient(
  //     {
  //       accessToken: 'J-qhv6BP1dtfJLOB0-uMQuVmkg2lX22ntVHQLnmRZWU',
  //     },
  //     {
  //       type: 'plain',
  //       defaults: {
  //         spaceId: 'f20l8i6up4k5',
  //         environmentId: 'master',
  //       },
  //     }
  //   )
  //   const entries = await plainClient.entry.getMany({
  //     query:{
  //       skip:10,
  //       limit:10,
  //     },
  //   })
    
  // }


  // (async () => {
  //   const env = await Connect();
  //   console.log(env)
  // })();

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
      <div className="mr-15 mt-12 sm:ml-12 text-4xl md:ml-14 lg:pl-10">
        <h1 className="ml-11 text-left text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
        <FlipWords2 words={words} /> <br />
        </h1>
        <div className="ml-11">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
            <FlipWords words={words2} /> <br />
          </h1>
        </div>
        <div className="flex mt-6 max-w-2xl ml-10">
          <p className="flex mt-10 text-center text-2xl font-light">
            Hello! My Name is Gustavo! And I'm Software Engineer student who is exited to build and to contribute growing the next generation of software development and technology industries.
          </p>
        </div>
        <div className="mt-20 ml-30 -mb-20 
        md:ml-65
        lg:-mb-10 lg:-mt-60 lg:ml-200
        xl:-mt-60 xl:ml-280 xl:-mb-10">
          <a href="/assets/cv-IIV.pdf">
            <button className="bg-neutral-500 text-white hover:scale-105 transition-transform rounded-4xl text-base font-bold p-4 md:p-6 md:text-base lg:p-6 lg:text-base xl:p-6 xl:text-xl">Download CV</button>
          </a>
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
      <h1 className="-mt-30 ml-11 text-left text-3xl sm:text-4xl md:text-4xl md:-mt-50  lg:text-5xl font-bold lg:-mt-75 lg:ml-35 xl:-mt-95 xl:ml-35">Projects</h1>
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
