"use client";
import React from "react";
import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/TracingBean";

export function TracingBeamDemo() {
  return (
    <div className="mb-50 w-full -px-25 -mt-105 lg:mb-100 lg:-mt-80">     
      <TracingBeam className="-px-5 w-full sm:px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-20 -ml-6 lg:mb-20 lg:-ml-11">
          <h1 className="text-left text-3xl ml-4 sm:text-4xl md:text-4xl lg:text-5xl font-bold lg:ml-3">Work</h1>
          <h1 className="text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold lg:ml-1">Experience</h1>
        </div>
        <div className="w-full max-w-5xl mx-auto pt-4">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-14 ml-15 w-full">
              <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 py-2 -mt-9 lg:mt-0 lg:py-2 mb-3 font-normal lg:ml-0">
                {item.badge}
              </h2>

              <p className={twMerge(calsans.className, "text-xl mb-4")}>
                {item.title}
              </p>

              <div className="text-xl lg:text-2xl">
                {item.description}
              </div>
            
                {/* {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover" />
                )} */}
              
                
            
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Concentrix, San Jose - Costa Rica",
    description: (
      <>
      
        <p className="mb-5">
          • Provided professional assistance to over 60 customers daily, addressing inquiries, complaints, and service requests in English.
        </p>
        <p className="mb-5">
        • Developed strong communication and problem-solving skills by resolving customer issues efficiently and empathetically.
        </p>
        <p className="mb-6 pb-10 lg:pb-0 lg:mb-5">
        • Maintaining an average customer satisfaction score of 92% to date.
        </p>
      </>
    ),
    badge: "2025",
    image:
      "",
  },
  {
    title: "Delirio House",
    description: (
      <>
      <div className="mt-2 lg:mt-2">
        <p className="mb-5">
        • Developed a restaurant inventory management system using Python, Flask, and MySQL, optimizing workflow by 70%.
        </p>
        <p className="mb-5">
        • Implemented key features to identify duplicate products and improve data organization within the database.
        </p>
        <p className="mb-5">
        • Collaborated with a team to analyze client requirements and design user-friendly interfaces that enhanced the user experience.
        </p>
        <p className="mb-5">
        • Produced clear and precise technical documentation to ensure system maintainability.
          </p>

      </div>
      </>
    ),
    badge: "2023",
    image:
      "",
  },
];
