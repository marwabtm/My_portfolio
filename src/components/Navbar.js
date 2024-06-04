import Link from "next/link"
import React from "react"
import Image from "next/image"
import Logo from "./Logo"
import Logopng from "../../public/images/MBT.png"
import { useRouter } from "next/router"
import { FacabookIcon, GitlabIcon, InstagramIcon, LinkedinIcon, LogoIcon, MoonIcon, SunIcon } from "./Icons"
import { motion } from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block  bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light`}>

                &nbsp;
            </span>
        </Link>
    )
}
const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    return (
        <header className="w-full px-32 py-8 font-medium flex item-center justify-between
        dark:text-light" >
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                {/* <CustomLink href="/projects" title="Projects" className="mx-4" /> 
                <CustomLink href="/articles" title="Articles" className="ml-4" />*/}
            </nav>

            <nav className="flex items-center justify-between">
                <motion.a href="https://www.linkedin.com/in/marwa-btm/" target="_blank"
                    whileHover={{ y: -2 }}
                    className="mr-3"
                    whileTap={{ scale: 0.9 }}
                >
                    <LinkedinIcon />
                </motion.a>
                <motion.a href="https://gitlab.com/btmarwa1" target="_blank"
                    whileHover={{ y: -2 }}
                    className="mr-3"
                    whileTap={{ scale: 0.9 }}
                >
                    <GitlabIcon />
                </motion.a>

                <motion.a href="https://www.facebook.com/marwa.btm" target="_blank"
                    whileHover={{ y: -2 }}
                    className="mr-3"
                    whileTap={{ scale: 0.9 }}
                >
                    <FacabookIcon />
                </motion.a>
                <motion.a href="https://www.instagram.com/marwa.b.t" target="_blank"
                    whileHover={{ y: -2 }}
                    className="mr-3"
                    whileTap={{ scale: 0.9 }}
                >
                    <InstagramIcon />
                </motion.a>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className=" ml-3 flex items-center justify-center rounded-full p-1" >
                    {mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                {/*<Logo />
                <Image src={Logopng} alt="logo MBT" className={"w-20"} />*/}
                <LogoIcon className={"w-2"} />
            </div>

        </header>
    )
}

export default Navbar