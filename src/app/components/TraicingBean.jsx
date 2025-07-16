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
            <div key={`content-${index}`} className="mb-14 ml-6 w-full">
             <h2
                className={twMerge(
                  "bg-gray-900 text-white rounded-full text-sm w-fit px-3 py-2 mb-3 font-normal lg:ml-0",
                  item.badge === "2025" && "-mt-9 lg:mt-0 xl:mt-0 lg:py-2",
                  item.badge === "2024" && "-mt-56 lg:-mt-60 xl:-mt-53 lg:py-2",
                  item.badge === "2023" && "-mt-56 lg:-mt-60 xl:-mt-53 lg:py-2", // más arriba solo este // más arriba solo este
                )}
              >
                {item.badge}
            </h2>

              <p className={twMerge(calsans.className, "text-xl mb-4 lg:text-3xl")}>
                {item.title}
              </p>

              <div className="text-sm lg:text-lg lg:w-full">
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
      
        <p className="-mb-45 size-70
        md:w-full  
        md:-mb-55
        lg:-mb-50 lg:w-full
        xl:-mb-57">
          • Provided professional assistance to over 60 customers daily, addressing inquiries, complaints, and service requests in English.
        </p>
        <p className="-mb-45 size-70 md:w-full md:-mb-55 lg:-mb-50 xl:-mb-57 lg:w-full">
        • Developed strong communication and problem-solving skills by resolving customer issues efficiently and empathetically.
        </p>
        <p className="mb-1 -pt-50 size-70 md:-mb-15 md:w-full lg:w-full">
        • Maintaining an average customer satisfaction score of 92% to date.
        </p>
      </>
    ),
    badge: "2025",
    image:
      "",
  },
  {
    title: "Freelance Job, San Jose - Costa Rica",
    description: (
      <>
      
        <p className="-mb-45 size-70
        md:w-full  
        md:-mb-55
        lg:-mb-50 lg:w-full
        xl:-mb-57">
        • Developed a restaurant inventory management system using Python, Flask, and MySQL, optimizing workflow by 70%.
        </p>
        <p className="-mb-45 size-70 md:w-full md:-mb-55 lg:-mb-50 xl:-mb-57 lg:w-full">
        • Implemented key features to identify duplicate products and improve data organization within the database.
        </p>
        <p className="mb-1 -pt-50 size-70 md:-mb-15 md:w-full lg:w-full">
        • Collaborated with the team of the restaurant to analyze client requirements and design user-friendly interfaces that enhanced the user experience.
        </p>
        <p className="-mb-30 -mt-40 -pt-50 size-70 md:mb-15 md:w-full md:-mt-48 lg:w-full lg:-mt-48 xl:-mt-48">
        • Produced clear and precise technical documentation to ensure system maintainability.
        </p>
      </>
    ),
    badge: "2024",
    image:
      "",
  },
  {
    title: "Delirio House",
    description: (
      <>
      <div className="">
        <p className="-mb-50 lg:mt-6 size-70 md:-mb-53 md:w-full lg:-mb-50 xl:-mb-57 lg:w-full">
        • Led a team of six staff members, coordinating daily operations and ensuring exceptional customer service delivery.
        </p>
        <p className="-mb-50 size-70 md:-mb-53 md:w-full lg:-mb-50 xl:-mb-57 lg:w-full">
        • Resolved customer complaints efficiently, maintaining a 95% satisfaction rate and enhancing overall dining experiences.
        </p>
        <p className="-mb-50 size-70 md:-mb-53 md:w-full lg:-mb-50 xl:-mb-57 lg:w-full">
        • Streamlined team workflows, improving service efficiency and reducing wait times by 20%.
        </p>
        <p className="-mb-50 size-70 md:-mb-53 md:w-full lg:-mb-57 xl:-mb-57 lg:w-full">
        • Trained and mentored new employees, fostering a collaborative and customer-focused work environment.
        </p>
        <p className="-mb-50 size-70 md:-mb-50 md:w-full lg:-mb-57 xl:-mb-57 lg:w-full">
        • Managed on-the-spot problem-solving, ensuring smooth service during high-pressure scenarios such as peak hours and events.
        </p>

      </div>
      </>
    ),
    badge: "2023",
    image:
      "",
  },
];
