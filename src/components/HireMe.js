import React from "react"
import { CircularText } from "./Icons"
import Link from "next/link"

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justfy-center overflow-hidden lg:bottom-10 lg:left-auto md:right-4 md:top-[-15px] md:bottom-auto md:absolute z-50 ">
            <div className="w-40 h-auto flex items-center justify-center relative animate-spin animate-spin-slow md:w-24">
                <CircularText className={"fill-dark dark:fill-light"} />
            </div>
            <Link href="mailto:marwa.bentamansourt@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                text-light shadow-md border border-solid border-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:w-14 md:h-14 md:text-[10px] " >
                HIRE ME
            </Link>
        </div>
    )
}

export default HireMe