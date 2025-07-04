"use client"

import { NavbarSimple } from "../components/NavBarMUI2"

export default function Page() {
    return(
        <div className="@container">
            <NavbarSimple />
            <section className="grid gap-8 md:grid-cols-2">
                <div className="">
                    <img className="
                    // image size
                    size-48 
                    rounded-2xl
                    
                    @3xs:@min-2xs:size-70
                    @3xs:@min-2xs:ml-10
                    @3xs:@min-2xs:mt-5

                    @xs:@min-sm:size-70
                    @xs:@min-sm:ml-18
                    @xs:@min-sm:mt-14
                    
                    @md:@min-lg:size-80
                    @md:@min-lg:ml-23
                    @md:@min-lg:mt-13

                    @xl:@min-2xl:size-90
                    @xl:@min-2xl:ml-20
                    @xl:@min-2xl:mt-20

                    @5xl:@min-6xl:size-90
                    @5xl:@min-6xl:ml-60
                    @5xl:@min-6xl:mt-30

                    @min-[1200px]:size-100" 
                    src="https://github.com/Gusttav28.png"  
                    alt="" />
                </div>
                <div className="">
                    <h1 className="
                    font-bold
                    text-base 
                    @5xl:@min-6xl:text-4xl
                    @5xl:@min-6xl:mt-50
                    @5xl:@min-6xl:mr-50
                    @5xl:@min-6xl:-ml-10
                    
                    ">Hey! Hi you there, My Name is Gustavo! And I'm Software Engineer.</h1>
                </div>
            </section>

        </div>
    )
}