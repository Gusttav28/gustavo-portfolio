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
                    
                    text-2xl  
                    text-center
                    -mt-25 
                    ml-3
                    
        
                                                            /* Center text on small screens */

                    md:text-3xl md:ml-25 md:mt-35           /* Adjust for md screens (iPad portrait). Resetting ml if grid handles positioning */
                    md:text-left                           /* Align left on medium screens and up */
                    
                    lg:text-4xl lg:mt-45 lg:-ml-44           /* Adjust for lg screens (iPad landscape, desktops) */
                    
                    xl:text-5xl xl:mt-40                   /* For larger desktops */

                    /* If your @5xl/@6xl ccontainer query breakpoints are large enough to hit desktop sizes */
                    2xl:text-5xl
                    2xl:mt-95
                    2xl:mr-50
                    2xl:-ml-20                   /* Be careful with negative margins, can break layout easily */
                    
                    
                    @min-[1200px]:-ml-30 @min-[1200px]:mt-60             /* This means 'when container is sdf6xl, and viewport is less than asdf1400px wide' */
                    
                    ">Hey! Hi you there, My Name is Gustavo! And I'm Software Engineer.</h1>
                </div>
                <div className="
                    p-4 mt-1
                    mr-140          
                                                /* Default for mobile */

                    md:text-xl md:-mr-100 md:-ml-30 md:-mt-20     /* Adjust for md screens (iPad portrait) */
                    lg:text-xl lg:-mt-20 lg:-ml-60 lg:-mr-130  
                    
                    xl:-mr-170
                    /* Adjust for lg screens (iPad landscape, desktops) */
                    
                ">
                    <p className="
                     text-base
                     ml-2                      /* Default font size */
                    md:text-2xl md:ml-40            /* For md screens (iPad portrait) */
                    lg:text-2xl lg:ml-80            /* For lg screens (iPad landscape, desktops) */
                    xl:text-2xl xl:ml-130
                    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi reprehenderit quos quaerat esse facere culpa eos necessitatibus? A, molestiae? Fugit vel sit iste consequuntur blanditiis laborum eaque, molestiae dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis magnam eum aperiam optio consectetur adipisci laboriosam sequi fugiat illum sit natus consequuntur, voluptas quaerat explicabo animi veritatis magni nam possimus alias inventore non! Tempore voluptatem vel totam modi saepe voluptas officia assumenda
                    </p>
                    <p className="
                    text-base
                    mt-7
                    ml-2                        /* Default font size */
                    md:text-2xl md:ml-40 md:mt-7            /* For md screens (iPad portrait) */
                    lg:text-2xl lg:ml-80 lg:mt-7            /* For lg screens (iPad landscape, desktops) */
                    xl:text-2xl xl:ml-130 xl:mt-7">
                    illo, iusto, molestiae mollitia laboriosam repellat! Hic alias voluptates sunt maxime est, tenetur error ea suscipit doloremque delectus autem recusandae, blanditiis repellat, possimus culpa magnam commodi veniam molestias optio ad aspernatur nemo. Incidunt id cumque fugiat debitis nihil hic, nobis perferendis eveniet deleniti? Iusto ducimus laboriosam quibusdam possimus exercitationem sapiente nihil quasi tempore, tenetur dolore excepturi placeat.</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4 " viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4 " viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>

                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                    <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>

                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                    <div className="flex ml-6    
                    mr-100
                    md:-ml-140 md:-mr-20
                    mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle text-cyan-300 size-11 md:size-7 lg:size-5 xl:size-4" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>
                        <p className="flex ml-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum impedit facere quasi dolore accusamus quibusdam hic cum dolores, atque tempore inventore dignissimos quaerat, illo autem sit distinctio dolorem! Velit!</p>
                    </div>
                </section>
                <UnderPage/>
                
            </section>
        </div>
    )
}