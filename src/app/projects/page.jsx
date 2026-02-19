"use client"
import { NavbarSimple } from "../components/NavBarMUI2"
import UnderPage from "../components/UnderPage"

export default function Page() {
    return(
        <div>
            <NavbarSimple />
            <a className="bg-blue-500 p-2 rounded-2xl ml-150 mt-20" href="/assets/f1movie.mkv">f1 movie</a>
            <UnderPage/>
        </div>
    )
}