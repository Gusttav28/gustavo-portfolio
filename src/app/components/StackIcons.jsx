import Image from "next/image";


export default function Stack() {
    return(
        <div>
            {/* Programing Languages - Frontend - Frameworks and Libraries */}
            <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-10 -mb-4 ml-20 font-normal scale-80 lg:ml-19 xs:ml-29 sm:ml-29 mb:ml-50">Programing Languages</h2>
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-19 scale-80 lg:ml-19 lg:mt-10 xs:ml-29 mb:ml-50">Front-End Technolgies</h2>
                
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-19  scale-80 lg:ml-19 lg:mt-10 xs:ml-29 mb:ml-50">Frameworks & Libraries</h2>
            </div>
            <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                {/* Data Bases - Developer Tools - Deployment & Hosting */}
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-21  scale-80 lg:ml-19 lg:mt-40 xs:ml-29 mb:ml-50">Data Bases</h2>
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-20  scale-80 lg:ml-40 lg:mt-40 xs:ml-29 mb:ml-50">Developer Tools</h2>
                <h2 className="bg-gray-900 text-white rounded-full text-sm w-fit px-3 mt-30 -mb-4 font-normal ml-19  scale-80 lg:ml-28 lg:mt-40 xs:ml-29 mb:ml-50">Deployment & Hosting</h2>

            </div>

            <div className="w-15 h-15 relative">
                <div className="mb-25">
                    {/* Programing Languages */}
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="mb-20 -mt-150 hover:scale-100 transition-transform ml-20 scale-75 lg:-mt-35 lg:ml-20 sm:ml-25 md:ml-25" src="/assets/python.svg" alt="Python" fill/>                    
                        <Image className="mb-2 -mt-150 hover:scale-100 transition-transform ml-34 scale-75 lg:-mt-35 lg:ml-35 sm:ml-45 md:ml-45" src="/assets/js.svg" alt="js" fill/>                   
                        <Image className="mb-20 -mt-150 hover:scale-100 transition-transform  ml-49 scale-75 lg:-mt-35 lg:ml-50 sm:ml-65 md:ml-65" src="/assets/nodejs.svg" alt="nodejs" fill/>     
                    </div>
                </div>
                <div className="mb-25">
                     {/* Frontend */}
                     <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="mb-20 -mt-120 ml-20 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-83 sm:ml-25 md:ml-25" src="/assets/html.svg" alt="html" fill/>
                        <Image className="mb-20 -mt-120 ml-34 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-96 sm:ml-25 md:ml-25" src="/assets/css.png" alt="css" fill/>
                        <Image className="mb-20 -mt-120 ml-46 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-108 sm:ml-25 md:ml-25" src="/assets/tailwind-css.svg" alt="tailwind" fill/>
                     </div>
                </div>
                <div className="mb-25">
                    {/* Frameworks & Libraries */}
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                         <Image className="rounded-full mb-20 hover:scale-100 transition-transform -mt-88 ml-20 scale-75 lg:-mt-35 lg:ml-143 sm:ml-25 md:ml-25" src="/assets/react.svg" alt="React" fill/>
                         <Image className="bg-white rounded-3xl mb-20 hover:scale-100 transition-transform -mt-88 ml-34 scale-75 lg:-mt-35 lg:ml-158 sm:ml-25 md:ml-25 px-1" src="/assets/next.svg" alt="next" fill/>
                         <Image className="mb-20 -mt-88 ml-48 hover:scale-100 transition-transform scale-75 lg:-mt-35 lg:ml-173 sm:ml-25 md:ml-25" src="/assets/django.svg" alt="django" fill/> 
                    </div>
                </div>
                <div className="mb-25">
                    {/* Data Bases */}
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                    <Image className="bg-gray-950 px-1 rounded-2xl mb-20 hover:scale-100 transition-transform -mt-55 ml-20 scale-95 lg:mt-7 lg:ml-20 sm:ml-25 md:ml-25" src="/assets/mysql.svg" alt="mysql" fill/>
                    <Image className="mb-20 -mt-55 ml-35 hover:scale-100 transition-transform scale-85 lg:mt-7 lg:ml-35 sm:ml-25 md:ml-25" src="/assets/postgresql.svg" alt="postgres" fill/>
                    </div>
                </div>
                <div className="mb-25">
                    {/* Developer Tools */}
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="mb-20 -mt-25 ml-20 hover:scale-100 transition-transform scale-75 lg:mt-7 lg:ml-83 sm:ml-25 md:ml-25" src="/assets/git.svg" alt="git" fill/>
                        <Image className="mb-20 -mt-25 ml-35 hover:scale-100 transition-transform scale-75 lg:mt-7 lg:ml-96 sm:ml-25 md:ml-25" src="/assets/postman.svg" alt="postman" fill/>
                        <Image className="mb-20 -mt-25 ml-50 hover:scale-100 transition-transform scale-75 lg:mt-7 lg:ml-110 sm:ml-25 md:ml-25" src="/assets/acertenittyui.png" alt="acertenityui" fill/>
                    </div>
                </div>
                <div className="mb-25">
                    {/* Deployment & Hosting */}
                    <div className="flex lg:flex-wrap flex-wrap lg:justify-start">
                        <Image className="bg-amber-50 rounded-3xl mb-20 hover:scale-100 transition-transform mt-7 ml-20 scale-85 lg:mt-7 lg:ml-147 sm:ml-25 md:ml-25" src="/assets/pyyythonanywhere.png" alt="pythonanywhere" fill/>
                        <Image className="mb-20 mt-7 ml-38 scale-75 lg:mt-7 lg:ml-164 sm:ml-25 md:ml-25 hover:scale-100 transition-transform" src="/assets/vercel.svg" alt="vercel" fill/>
                    </div>
                </div>
            </div>
        </div>
    )
}