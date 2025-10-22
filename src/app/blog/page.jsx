"use client"

import { NavbarSimple } from "../components/NavBarMUI2"
import UnderPage from "../components/UnderPage"
import { FlipWords } from "../components/ui/FlipWords";
import { FlipWords2 } from "../components/ui/FlipWords";

export default function Page() {
    const words = ["...", "", "", ""];
    const words2 = ["..", "...", "Welcome back Gustavo!"];
    
    return(
        <div>
            {/* <NavbarSimple/> */}
            <h1 className="ml-11 text-left text-2xl sm:text-4xl md:text-4xl lg:text-2xl xl:text-3xl xl:mt-30 xl:ml-190 font-bold">
            < FlipWords2 words={words} /> <br />
            </h1>
            <div className="ml-11">
                <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl xl:text-3xl xl:ml-150">
                <FlipWords words={words2} /> <br />
                </h1>
            </div>
            <a href="/assets/DesignPattern.pdf">
            <button className="bg-blue-400 text-white hover:scale-105 transition-transform rounded-4xl text-base font-bold ml-4 p-4 md:p-6 md:text-base lg:p-6 lg:mt-5 lg:text-base xl:p-5 xl:text-base xl:ml-190 xl:mt-80">Design Pattern</button>
            </a> 
            <a href="/assets/examWalterr.pdf">
            <button className="bg-blue-400 text-white hover:scale-105 transition-transform rounded-4xl text-base font-bold ml-4 p-4 md:p-6 md:text-base lg:p-6 lg:mt-5 lg:text-base xl:p-5 xl:text-base xl:ml-200 xl:mt-80">Walter Exam</button>
            </a>
            {/* <UnderPage/> */}
        </div>
    )
}
