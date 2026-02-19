"use client"

import { NavbarSimple } from "../components/NavBarMUI2"
import UnderPage from "../components/UnderPage"
import { FlipWords } from "../components/ui/FlipWords";
import { FlipWords2 } from "../components/ui/FlipWords";

export default function Page() {
    const words = ["...", "", "", ""];
    const words2 = ["..", "...", "Welcome back Gustavo!"];
    
    return(
        <div>
            {/* <NavbarSimple/> */}
            <h1 className="ml-11 text-left text-2xl sm:text-4xl md:text-4xl lg:text-2xl xl:text-3xl xl:mt-30 xl:ml-190 font-bold">
            < FlipWords2 words={words} /> <br />
            </h1>
            <div className="ml-11">
                <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl xl:text-3xl xl:ml-150">
                <FlipWords words={words2} /> <br />
                </h1>
            </div>
            <a href="/assets/DesignPattern.pdf">
            <button className="bg-blue-400 text-white hover:scale-105 transition-transform rounded-4xl text-base font-bold ml-4 p-4 md:p-6 md:text-base lg:p-6 lg:mt-5 lg:text-base xl:p-5 xl:text-base xl:ml-190 xl:mt-80">Design Pattern</button>
            </a> 
            <a href="https://task-manager-gustavos-projects-3920aed2.vercel.app/">
            <button className="bg-blue-400 text-white hover:scale-105 transition-transform rounded-4xl text-base font-bold ml-4 p-4 md:p-6 md:text-base lg:p-6 lg:mt-5 lg:text-base xl:p-5 xl:text-base xl:ml-190 xl:mt-20">Task Management</button>
            </a> 
            <div>
                <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl xl:text-3xl xl:ml-150">Platform technologie Engineer</h1>
                <p>
                    Technical Areas to Review
                    Debugging & Troubleshooting (Very Important)
                    You will likely be asked to walk through your troubleshooting process for complex issues.
                    Example: If an application is slow or unresponsive, a strong answer may include:
                    Gathering information from the customer (scope, impact, timeline)
                    Reviewing browser developer tools and server logs
                    Analyzing page load times, TTFB, and slow resources
                    Identifying backend vs frontend bottlenecks
                    Checking database queries and system resource usage
                    Explaining how you would isolate, validate, and resolve the issue
                    Focus on how you think, not just the tools you name.

                    Web Application Technologies
                    Be comfortable discussing:
                    JavaScript, HTML, and CSS fundamentals
                    How browsers render web pages
                    Client-side vs server-side issues
                    Debugging frontend problems using browser developer tools

                    Java & JavaScript Fundamentals
                    You may be asked about:
                    Object-Oriented programming concepts
                    Debugging Java or JavaScript code
                    The difference between loose and strict equality in JavaScript
                    Safely decoding and handling JSON
                    How to pause execution during debugging (breakpoints, debugger statements)

                    Databases (MySQL / Oracle)
                    Be prepared to discuss:
                    How you would analyze database-related issues
                    Identifying slow or inefficient queries
                    Understanding relational database concepts
                    How database performance can impact application behavior

                    Systems & Infrastructure
                    You should have foundational knowledge of:
                    Linux/Unix or Microsoft Server environments
                    Diagnosing system-level performance issues
                    Remote administration and troubleshooting using tools such as:
                    SSH
                    SNMP
                    WMI
                    PowerShell

                    Networking Basics
                    You may be asked to walk through what happens during a typical network request:
                    Request creation
                    Network transmission
                    Server-side processing
                    Response generation
                    Browser rendering
                    This helps demonstrate your understanding of SaaS and web application behavior.

                    Helpful Resource
                    We recommend reviewing ServiceNow documentation to get familiar with the platform and user experience concepts. A helpful starting point is below — feel free to explore further:
                    https://www.servicenow.com/docs/r/impact/io-triage-sn-instance.html

                    Final Tips for the Interview
                    During the interview, remember to:
                    DO NOT USE AI TOOLS
                    Keep your hands visible at all times
                    Explain your thinking step by step
                    Ask clarifying questions when needed
                    Consider multiple solutions and discuss tradeoffs
                    Highlight best practices
                    Show awareness of performance, scalability, and user impact
                    Demonstrate professionalism, especially in customer-facing scenarios
                    If you have any questions as you prepare, don’t hesitate to reach out.
                    Wishing you the best of luck — you’ve got this! 🚀
                </p>
            </div>
            {/* <UnderPage/> */}
        </div>
    )
}