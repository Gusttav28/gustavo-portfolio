"use client"

import { NavbarSimple } from "../components/NavBarMUI2"

import ImageIcon from "../components/ImageIcon"

export default function Page() {
    return(
        <div className="@container">
            <NavbarSimple />
            <section className="grid gap-8 md:grid-cols-2">
                <div className="">
                    <ImageIcon/>
                </div>
                <div className="ml-20 @xs:@min-sm:items-center @md:@min-lg:ml-20">
                    <h1 className="
                    font-bold
                                                  /* Default for mobile */
                    
                    text-2xl  
                    text-center
                    -mt-25 
                    -ml-10
                                                            /* Center text on small screens */

                    md:text-3xl md:-ml-15 md:mt-35           /* Adjust for md screens (iPad portrait). Resetting ml if grid handles positioning */
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
                    p-3 mt-10                            /* Default for mobile */

                    md:text-xl md:-mr-100 md:-ml-30 md:-mt-20     /* Adjust for md screens (iPad portrait) */
                    lg:text-xl lg:-mt-20 lg:-ml-60 lg:-mr-130  
                    
                    xl:-mr-170
                    /* Adjust for lg screens (iPad landscape, desktops) */
    
                    
                    
                ">
                    <p className="
                     text-base                        /* Default font size */
                    md:text-2xl md:ml-40            /* For md screens (iPad portrait) */
                    lg:text-2xl lg:ml-80            /* For lg screens (iPad landscape, desktops) */
                    xl:text-2xl xl:ml-130
                    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi reprehenderit quos quaerat esse facere culpa eos necessitatibus? A, molestiae? Fugit vel sit iste consequuntur blanditiis laborum eaque, molestiae dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis magnam eum aperiam optio consectetur adipisci laboriosam sequi fugiat illum sit natus consequuntur, voluptas quaerat explicabo animi veritatis magni nam possimus alias inventore non! Tempore voluptatem vel totam modi saepe voluptas officia assumenda
                    </p>
                    <p className="
                    text-base                        /* Default font size */
                    md:text-2xl md:ml-40            /* For md screens (iPad portrait) */
                    lg:text-2xl lg:ml-80            /* For lg screens (iPad landscape, desktops) */
                    xl:text-2xl xl:ml-130">
                    illo, iusto, molestiae mollitia laboriosam repellat! Hic alias voluptates sunt maxime est, tenetur error ea suscipit doloremque delectus autem recusandae, blanditiis repellat, possimus culpa magnam commodi veniam molestias optio ad aspernatur nemo. Incidunt id cumque fugiat debitis nihil hic, nobis perferendis eveniet deleniti? Iusto ducimus laboriosam quibusdam possimus exercitationem sapiente nihil quasi tempore, tenetur dolore excepturi placeat.</p>
                </div>
                <section>
                    {/* <h1>My current years here</h1> */}
                </section>
            </section>
        </div>
    )
}