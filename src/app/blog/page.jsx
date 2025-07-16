"use client"

import { NavbarSimple } from "../components/NavBarMUI2"
import UnderPage from "../components/UnderPage"

export default function Page() {

    const windowAlert = () => (
        alert("Gustavo is still working on this page")
    )
    
    return(
        <div>
            <NavbarSimple/>
            <UnderPage/>
        </div>
    )
}