"use client"

import { NavbarSimple } from "../components/NavBarMUI2"
import Stack from "../components/StackIcons"

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
                    @md:@min-lg:ml-20
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
                <div className="@xs:@min-sm:items-center @md:@min-lg:ml-20">
                    <h1 className="
                    font-bold
                    text-base 
                    @xs:@min-sm:text-2xl @xs:@min-sm:ml-15 @xs:@min-sm:mt-10
                    @md:@min-lg:-ml-7 @md:@min-lg:mt-50 @md:@min-lg:text-3xl

                    @5xl:@min-6xl:text-4xl
                    @5xl:@min-6xl:mt-50
                    @5xl:@min-6xl:mr-50
                    @5xl:@min-6xl:-ml-10
                    
                    ">Hey! Hi you there, My Name is Gustavo! And I'm Software Engineer.</h1>
                </div>
                <div className="
                    @3xs:@min-2xs:mt-4 @3xs:@min-2xs:-ml-130
                    @xs:@min-sm:-mt-15 @xs:@min-sm:-ml-130
                    @md:@min-lg:mt-28
                    @md:@min-lg:-ml-120
                    @5xl:@min-6xl:mt-30 @5xl:@min-6xl:-ml-80
                ">
                    <Stack/>
                </div>
                <div className="
                    @xs:@min-sm:p-3 @xs:@min-sm:-mt-5
                    @md:@min-lg:mt-10 @md:@min-lg:-ml-90 @md:@min-lg:mr-10
                    @xl:@min-2xl:-ml-90 @xl:@min-2xl:p-1 @xl:@min-2xl:mr-10
                    @5xl:@min-6xl:-ml-104 @5xl:@min-6xl:max-w-fit
                ">
                    <p className="
                    @xs:@min-sm:text-xl
                    @md:@min-lg:text-2xl @md:@min-lg:-ml-10
                    @xl:@min-2xl:text-2xl
                    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi reprehenderit quos quaerat esse facere culpa eos necessitatibus? A, molestiae? Fugit vel sit iste consequuntur blanditiis laborum eaque, molestiae dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis magnam eum aperiam optio consectetur adipisci laboriosam sequi fugiat illum sit natus consequuntur, voluptas quaerat explicabo animi veritatis magni nam possimus alias inventore non! Tempore voluptatem vel totam modi saepe voluptas officia assumenda
                    </p>
                    <p className="
                    @xs:@min-sm:text-xl @xs:@min-sm:mt-10
                    @md:@min-lg:text-2xl @md:@min-lg:-ml-10 @md:@min-lg:mt-10
                    @xl:@min-2xl:text-2xl @xl:@min-2xl:mt-10">
                    illo, iusto, molestiae mollitia laboriosam repellat! Hic alias voluptates sunt maxime est, tenetur error ea suscipit doloremque delectus autem recusandae, blanditiis repellat, possimus culpa magnam commodi veniam molestias optio ad aspernatur nemo. Incidunt id cumque fugiat debitis nihil hic, nobis perferendis eveniet deleniti? Iusto ducimus laboriosam quibusdam possimus exercitationem sapiente nihil quasi tempore, tenetur dolore excepturi placeat.</p>
                </div>
                <section>
                    <h1>My current years here</h1>
                </section>
            </section>
        </div>
    )
}