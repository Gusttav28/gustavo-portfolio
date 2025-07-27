"use client"

import { NavbarSimple } from "../components/NavBarMUI2"

import ImageIcon from "../components/ImageIcon"
import UnderPage from "../components/UnderPage"

export default function Page() {
    return(
        <div className="@container overflow-x-hidden">
            <NavbarSimple />
            <section className="grid gap-8 md:grid-cols-2">
                <div className="">
                    <ImageIcon/>
                </div>
                <div className="mr-140 
                    md:mr-35 md:-ml-26
                    lg:ml-20 lg:mr-10
                ">
                    <h1 className="
                    font-bold
                                                  /* Default for mobile */
                    
                    text-xl  
                    text-center
                    -mt-30 
                    ml-3                            
                                                            /* Center text on small screens */

                    md:text-2xl md:ml-20 md:mt-35           /* Adjust for md screens (iPad portrait). Resetting ml if grid handles positioning */
                    md:text-left                           /* Align left on medium screens and up */
                    
                    lg:text-2xl lg:mt-40 lg:-ml-44           /* Adjust for lg screens (iPad landscape, desktops) */
                    
                    xl:text-5xl xl:mt-40                   /* For larger desktops */

                    /* If your @5xl/@6xl ccontainer query breakpoints are large enough to hit desktop sizes */
                    2xl:text-3xl
                    2xl:-mt-25
                    2xl:mr-50
                    2xl:-ml-20                   /* Be careful with negative margins, can break layout easily */
                    
                    
                    @min-[1200px]:-ml-60 @min-[1200px]:mt-50             /* This means 'when container is sdf6xl, and viewport is less than asdf1400px wide' */
                    
                    ">Hey! Hi you there, My Name is Gustavo! And I'm Software Engineer.</h1>
                </div>
                <div className="
                    p-4 -mt-20
                    mr-140           
                                                /* Default for mobile */

                    md:text-xl md:-mr-100 md:-ml-30 md:-mt-20     /* Adjust for md screens (iPad portrait) */
                    lg:text-base lg:-mt-20 lg:-ml-100 lg:-mr-140  
                    
                    xl:-mr-170
                    /* Adjust for lg screens (iPad landscape, desktops) */
                    
                ">
                    <p className="
                     text-base
                     ml-5                     /* Default font size */
                    md:text-2xl md:ml-40            /* For md screens (iPad portrait) */
                    lg:text-2xl lg:ml-120            /* For lg screens (iPad landscape, desktops) */
                    xl:text-xl xl:ml-145
                    ">Since I was a little kid I was so entusiastic with the technology and so couriouse with it, that curoiuse actually guide me to kind of cratch the computer of my family that it was in my home after try to create a partion to be able to put two different of operating systems, windows and ubuntu; Sorry mom hahaha  
                    </p>
                    <p className="
                    text-base
                    mt-7
                    ml-5                       /* Default font size */
                    md:text-2xl md:ml-40 md:mt-7            /* For md screens (iPad portrait) */
                    lg:text-2xl lg:ml-120 lg:mt-7            /* For lg screens (iPad landscape, desktops) */
                    xl:text-xl xl:ml-145 xl:mt-7">
                    Perhaps like any other history, after you get some real touch with the technology you would no be able to have another life, you would convert in some robot or something like that, and sometimes that's not the case, like mine, In my case I was able to get in touch with a bit of HTML and CSS and it was awesome, but since I was a litlle kid, I didn't continue with it becasue I had regular things to do as a normal kid, I needed to go to school and so and on, so yeah, that was my case, I touch the technology (programing for being more specific) and it was great, but I didn't continue, until the year that I got to collage, check bellow to watch the whole path.  
                    </p>
                </div>
                <section className="
                    mt-2
                    mr-40       
                    md:mt-140 md:mr-70 md:ml-50
                    lg:mt-100 lg:mr-70 lg:ml-15  
                    xl:mt-90
                ">
                    <label className="ml-10 text-2xl font-bold
                        md:-ml-140 md:text-3xl md:mr-20
                        lg:-ml-140 lg:mt-20
                        xl:-ml-140   
                    
                    " htmlFor="">2025</label>
                    <div className="flex 
                    ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-8 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-8 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-8 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-neutral-500 to-transparent w-340 mb-6 -ml-140 mt-12"></div>
                    
                    <label className="ml-10 text-2xl font-bold
                        md:-ml-140 md:text-3xl md:mr-20
                        lg:-ml-140 lg:mt-20
                        xl:-ml-140" htmlFor="">2024</label>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-8 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rerum nostrum, expedita, eaque asperiores tempora ratione nam sapiente sunt adipisci beatae iusto! Vitae, quasi. Enim omnis aut possimus autem quaerat.</p>
                    </div>

                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-8 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-8 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-neutral-500 to-transparent w-340 mb-6 -ml-140 mt-12"></div>
                    
                    <label className="ml-10 text-2xl font-bold
                        md:-ml-140 md:text-3xl md:mr-20
                        lg:-ml-140 lg:mt-20
                        xl:-ml-140" htmlFor="">2023</label>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 text-base size-6 mt-2 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">
                        One of my first real touch was when I started to learn python in master mind academy before to got to callage.</p>
                    </div>

                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 text-base size-6 mt-2 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2 mt-2 text-sm md:mt-0 lg:-mt-1 xl:-mt-1">
                            Than on collage I started to learn pseudo code and Java, what actually I was very new for that languaje but it was so fun to learn.</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor" className="bi bi-check-circle text-cyan-300 text-base size-6 mt-2 md:size-7 lg:size-5 xl:size-3 xl:mt-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2 mt-2 md:mt-0 lg:-mt-1 xl:-mt-1">
                            And than learn about cloud systems and data bases was the main frame for to start to develop my own applications.</p>
                    </div>
                </section>                
            </section>
            <UnderPage/>
        </div>
    )
}