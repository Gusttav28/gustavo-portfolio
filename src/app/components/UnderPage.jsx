"use client"
import { PlaceholdersAndVanishInputDemo } from "./VanishInput"
import Stack from "./StackIcons"
import { IconBrandLinkedin } from "@tabler/icons-react"

export default function UnderPage() {
    return(
        <div className="">
            <section className="
            ml-15 mt-20 items-center 
            md:ml-10 md:mt-20
            lg:mt-35 lg:ml-150 
            xl:ml-210
            
            
            ">
                <div className="flex 
                    ml-5
                    md:ml-55
                    lg:-ml-40
                    xl:-ml-36

                ">
                    <img className="size-15 lg:-ml-40 xl:ml-2 rounded-full" src="https://github.com/Gusttav28.png" alt="" />
                    <h1 className="pl-4 mt-3 mr-2 
                    md:-mr-30 md:mt-4
                    lg:-mr-30 lg:-ml-1

                    font-bold">Gustavo Camacho</h1>
                </div>
            </section>  
            <div className="flex ml-15
                md:ml-60
                lg:ml-108
                xl:ml-210
            
            ">
                <a className="hover:text-blue-400 -mt-3 ml-30 lg:-ml-10
                
                " href="https://www.linkedin.com/in/gustavo-camacho-b9a64b243/">
                    <IconBrandLinkedin/>
                </a>
                <a href="https://github.com/Gusttav28">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-github scale-120 -mt-2 ml-2 hover:text-blue-400">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                </a>
                <div className="relative">
                    <p className=" mt-10 max-w-lg -ml-50 mr-5 text-center text-sm font-normal text-neutral-300
                        md:-ml-66 md:-mr-80
                        xl:-ml-66                    
                    ">
                        Spotlight effect is a great way to draw attention to a specific part
                        of the page. Here, we are drawing the attention towards the text
                        section of the page. I don&apos;t know why but I&apos;m running out of
                        copy.
                    </p>
                </div>
            </div>
            <div className="lg:-ml-40 xl:ml-2">
                <PlaceholdersAndVanishInputDemo/>
            </div>
        </div>
    )
}