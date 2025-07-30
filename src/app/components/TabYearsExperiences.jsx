"use client"
import { calsans } from "@/fonts/calsans"
import React from "react"
import { twMerge } from "tailwind-merge"


const additionalExperience = [
    {
        title:"Tech Support | Heredia - Costa Rica",
        description:(
            <> 
            <p className="-mb-45 size-70
                md:w-full  
                md:-mb-55
                lg:-mb-60 lg:w-full
                xl:-mb-57"
            >
                • Provided technical assistance for a medical device, guiding users through troubleshooting steps, resolving operational issues, and ensuring proper device functionality with clear and professional communication.
            </p>
            </>
        ),
        year:"2025",
        badge:"Tech Support"
    },
    {
        title:"Concentrix | San Jose - Costa Rica",
        description:(
            <> 
            <p className="-mb-45 size-70
                md:w-full  
                md:-mb-55
                lg:-mb-50 lg:w-full
                xl:-mb-57"
            >
                • Delivered support resolving inquiries and complaints efficiently while strengthening communication and conflict resolution skills
            </p>
            </>
        ),
        year:"2025",
        badge:"Call center Agent"
    },
    {
        title:"Freelance Job | San Jose - Costa Rica",
        description:(
            <> 
                <p className="-mb-45 size-70
                    md:w-full  
                    md:-mb-55
                    lg:-mb-50 lg:w-full
                    xl:-mb-57">
                    • Developed a restaurant inventory system using Python, Flask, and MySQL, optimizing workflows by 70% through data validation improvements, while enhancing UI responsiveness and maintainability through cross-team collaboration and clear documentation.
                </p>
            </>
        ),
        year:"2024",
        badge:"Python Developers"
    },
    {
        title:"Delirio House | San Jose - Costa Rica",
        description:(
            <> 
                <p className="-mb-50 lg:mt-6 size-70 md:-mb-53 md:w-full lg:-mb-50 xl:-mb-57 lg:w-full">
                • Led a team, improved workflow efficiency by 20%, and maintained a 95% customer satisfaction rate through effective coordination, delivering data-driven solutions, and process improvement.
                </p>
            </>
        ),
        year:"2023",
        badge:"Team Lead Supervisor"
    },
]


export default function TabYears() {
    return (
        <> 
            <div className="mb-50 w-full -px-25 -mt-15 lg:mb-100 lg:mt-50">
            <div className="flex items-center gap-2 mb-20 -ml-6 lg:mb-20 lg:-ml-11">
                <h1 className="text-left text-2xl ml-4 sm:text-4xl md:text-4xl lg:text-2xl font-bold lg:ml-12">Work</h1>
                 <h1 className="text-left text-2xl sm:text-4xl md:text-4xl lg:text-2xl font-bold">Experience</h1>
            </div>
                <div className="w-full max-w-5xl mx-auto pt-4 lg:px-20 lg:-ml-10 xl:-ml-20 xl:px-30">
                    {additionalExperience.map((item, index) => (
                        <div key={index} className="mb-14 ml-6 w-full">
                            <h2 className={twMerge(
                                "bg-gray-900 text-white rounded-full text-sm w-fit px-3 py-2 mb-3 font-normal lg:ml-0",
                                item.year === "2025" && "-mt-13 lg:-mt-10 xl:mt-0 lg:py-2",
                                item.year === "2024" && "-mt-56 lg:-mt-70 xl:-mt-53 lg:py-2",
                                item.year === "2023" && "-mt-36 lg:-mt-60 xl:-mt-53 lg:py-2", 
                                item.year === "2022" && "-mt-36 lg:-mt-70 xl:-mt-53 lg:py-2", // más arriba solo este // más arriba solo este
                            )}>
                                {item.year}
                            </h2>
                            <p className={twMerge(calsans.className, "text-base mb-4 lg:text-xl")}>{item.title}</p>
                            <p className={twMerge("text-sm text-neutral-500 mb-4 lg:text-sm lg:-mt-3")}>{item.badge}</p>
                            <div className="text-sm lg:text-base lg:w-full lg:-mt-2">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}