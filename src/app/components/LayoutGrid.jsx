"use client";
import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import Image from "next/image";

export function LayoutGridDemo() {
  return (
    <div className="flex">
        <div className="mt-10 ml-20 lg:mt-10 lg:ml-60">
          <a  href="https://github.com/Gusttav28/Nextjs-Task" className="text-neutral-400 hover:text-blue-400 z-50 relative">
            github.com
          </a>
        </div>
        <div className="h-screen w-full flex -mt-32 -ml-40 py-70 lg:h-screen sm:p-70 md:p-70 lg:p-70 lg:-ml-100 lg:-mt-30 lg:w-full">
          <LayoutGrid cards={cards} />
        </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold mt-3 md:text-4xl text-xl text-white">
        Task Manager
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base max-w-lg text-white">
        A task manager the help you to track all the tracks that you need to do through the day.
      </p>
       <a href="https://task-manager-gusttav28-gustavos-projects-3920aed2.vercel.app/">
        <p className="text-xs lg:mt-2 hover:scale-105 transition-transform md:text-lg text-neutral-300">Check the project (click here) </p>
       </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        TEST
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        WE STILL WORKING ON THIS
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
      
    </div>
  );
};



export const cards = [
  {
    // next js task ---- TASK MANAGMENT
    id: 1,
    content: <SkeletonOne />,
    className: "mb:col-span-1",
    src:"/assets/project.png", 
    imageClassName:"-p-10 bg-gray-200",
  }
];
