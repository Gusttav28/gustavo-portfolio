"use client"
import { PlaceholdersAndVanishInputDemo } from "./VanishInput"
import Stack from "./StackIcons"

export default function UnderPage() {
    return(
        <div>
            <section className="flex lg:mt-35 items-center lg:ml-150">
                <img className="size-15 rounded-full" src="https://github.com/Gusttav28.png" alt="" />
                <h1 className="pl-4 gap-2 mr-4 font-bold">Gustavo Camacho</h1>
            </section>
            <div className="lg:mt-9 lg:ml-125">
            </div>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business. Whether you&apos;re sending order confirmations,
                    password reset emails, or promotional campaigns, MailJet has got you
                    covered.
            </p>    
            <Stack/>
            <PlaceholdersAndVanishInputDemo/>
        </div>
    )
}