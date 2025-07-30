"use client"
import { NavbarSimple } from "../components/NavBarMUI2"
import UnderPage from "../components/UnderPage"
import { SignupFormDemo }  from "../components/messageForm"

export default function Page() {
    return(
        <div>
            <NavbarSimple/>
            <SignupFormDemo/>
            <UnderPage/>
        </div>
    )
}