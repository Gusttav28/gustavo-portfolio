import Image from "next/image";

import { IconBrandLinkedin } from "@tabler/icons-react"

export default function Stack() {
    return(
        <div>
            <div className="flex">

                {/* <Image className="bg-white rounded-full scale-2 mt-680 ml-2 hover:scale-2 transition-transform" src="/assets/github.png" alt="github" fill/> */}
                {/* <Image className="mt-679 -ml-5 scale-2 rounded-3xl" src="/assets/linkedin.svg" alt="linkedin" fill/> */}
                <a className="hover:text-blue-400 -mt-33 ml-180" href="https://www.linkedin.com/in/gustavo-camacho-b9a64b243/">
                    <IconBrandLinkedin/>
                </a>
                <a href="https://github.com/Gusttav28">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-github scale-120 -mt-32 ml-2 hover:text-blue-400">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                </a>
            </div>
            {/* Programing Languages - Frontend - Frameworks and Libraries */}
            {/* <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-10 -mb-4 ml-20 font-normal scale-80 lg:ml-19 xs:ml-29 sm:ml-29 mb:ml-50">Programing Languages</h2>
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-19 scale-80 lg:ml-19 lg:mt-10 xs:ml-29 mb:ml-50">Front-End Technolgies</h2>
                
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-19  scale-80 lg:ml-19 lg:mt-10 xs:ml-29 mb:ml-50">Frameworks & Libraries</h2>
            </div> */}
            {/* <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                Data Bases - Developer Tools - Deployment & Hosting
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-21  scale-80 lg:ml-19 lg:mt-40 xs:ml-29 mb:ml-50">Data Bases</h2>
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-20  scale-80 lg:ml-40 lg:mt-40 xs:ml-29 mb:ml-50">Developer Tools</h2>
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-19  scale-80 lg:ml-28 lg:mt-40 xs:ml-29 mb:ml-50">Deployment & Hosting</h2>

            </div> */}

            {/* <div className="w-15 h-15 relative">
                <div className="mb-25">
                    Programing Languages
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="mb-20 -mt-150 hover:scale-100 transition-transform ml-20 scale-75 lg:-mt-35 lg:ml-20 sm:ml-25 md:ml-25" src="/assets/python.svg" alt="Python" fill/>                    
                        <Image className="mb-2 -mt-150 hover:scale-100 transition-transform ml-34 scale-75 lg:-mt-35 lg:ml-35 sm:ml-45 md:ml-45" src="/assets/js.svg" alt="js" fill/>                   
                        <Image className="mb-20 -mt-150 hover:scale-100 transition-transform  ml-49 scale-75 lg:-mt-35 lg:ml-50 sm:ml-65 md:ml-65" src="/assets/nodejs.svg" alt="nodejs" fill/>     
                    </div>
                </div> */}
                {/* <div className="mb-25">
                     Frontend
                     <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="mb-20 -mt-120 ml-20 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-83 sm:ml-25 md:ml-25" src="/assets/html.svg" alt="html" fill/>
                        <Image className="mb-20 -mt-120 ml-34 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-96 sm:ml-25 md:ml-25" src="/assets/css.png" alt="css" fill/>
                        <Image className="mb-20 -mt-120 ml-46 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-108 sm:ml-25 md:ml-25" src="/assets/tailwind-css.svg" alt="tailwind" fill/>
                     </div>
                </div> */}
                {/* <div className="mb-25">
                    Frameworks & Libraries
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                         <Image className="rounded-full mb-20 hover:scale-100 transition-transform -mt-88 ml-20 scale-75 lg:-mt-35 lg:ml-143 sm:ml-25 md:ml-25" src="/assets/react.svg" alt="React" fill/>
                         <Image className="bg-white rounded-3xl mb-20 hover:scale-100 transition-transform -mt-88 ml-34 scale-75 lg:-mt-35 lg:ml-158 sm:ml-25 md:ml-25 px-1" src="/assets/next.svg" alt="next" fill/>
                         <Image className="mb-20 -mt-88 ml-48 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-173 sm:ml-25 md:ml-25" src="/assets/django.svg" alt="django" fill/> 
                    </div>
                </div> */}
                {/* <div className="mb-25">
                    Data Bases
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                    <Image className="bg-gray-950 px-1 rounded-2xl mb-20 hover:scale-100 transition-transform -mt-55 ml-20 scale-95 lg:mt-7 lg:ml-20 sm:ml-25 md:ml-25" src="/assets/mysql.svg" alt="mysql" fill/>
                    <Image className="mb-20 -mt-55 ml-35 hover:scale-100 transition-transform scale-85 lg:mt-7 lg:ml-35 sm:ml-25 md:ml-25" src="/assets/postgresql.svg" alt="postgres" fill/>
                    </div>
                </div> */}
                {/* <div className="mb-25">
                    Developer Tools
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="mb-20 -mt-25 ml-20 hover:scale-100 transition-transform scale-75 lg:mt-7 lg:ml-83 sm:ml-25 md:ml-25" src="/assets/git.svg" alt="git" fill/>
                        <Image className="mb-20 -mt-25 ml-35 hover:scale-100 transition-transform scale-75 lg:mt-7 lg:ml-96 sm:ml-25 md:ml-25" src="/assets/postman.svg" alt="postman" fill/>
                        <Image className="mb-20 -mt-25 ml-50 hover:scale-100 transition-transform scale-75 lg:mt-7 lg:ml-110 sm:ml-25 md:ml-25" src="/assets/acertenittyui.png" alt="acertenityui" fill/>
                    </div>
                </div> */}
                {/* <div className="mb-25">
                    Deployment & Hosting
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="bg-amber-50 rounded-3xl mb-20 hover:scale-100 transition-transform mt-7 ml-20 scale-85 lg:mt-7 lg:ml-147 sm:ml-25 md:ml-25" src="/assets/pyyythonanywhere.png" alt="pythonanywhere" fill/>
                        <Image className="mb-20 mt-7 ml-38 scale-75 lg:mt-7 lg:ml-164 sm:ml-25 md:ml-25 hover:scale-100 transition-transform" src="/assets/vercel.svg" alt="vercel" fill/>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    )
}