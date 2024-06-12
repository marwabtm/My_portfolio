import Link from "next/link"
import React, { useState } from "react"
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

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-dark`} onClick={handleClick}>
            {title}
            <span className={`
            h-[1px] inline-block  bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} `}>

                &nbsp;
            </span>
        </button>
    )
}
const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="w-full px-32 py-8 lg:py-10 lg:px-16 md:px-12 sm:px-8 font-medium flex item-center justify-between dark:text-light relative z-10" >
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `}></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden ">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    {/* <CustomLink href="/projects" title="Projects" className="mx-4" /> 
                    <CustomLink href="/articles" title="Articles" className="ml-4" />*/}
                </nav>
                <nav className="flex items-center justify-between">
                    <motion.a href="https://www.linkedin.com/in/marwa-btm/" target="_blank"
                        whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
                        <LinkedinIcon />
                    </motion.a>
                    <motion.a href="https://gitlab.com/btmarwa1" target="_blank"
                        whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
                        <GitlabIcon />
                    </motion.a>

                    <motion.a href="https://www.facebook.com/marwa.btm" target="_blank"
                        whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
                        <FacabookIcon />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/marwa.b.t" target="_blank"
                        whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
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
            </div>
            {
                isOpen ?

                    <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }}
                        className="min-w-[40vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/3 md:top-1/3 md:left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-light/75 rounded-lg backdrop-blur-md py-32 ">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href="/" title="Home" className="mb-4" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className="mb-4" toggle={handleClick} />
                            {/* <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                            <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />*/}
                        </nav>
                        <nav className="flex items-center justify-between">
                            <motion.a href="https://www.linkedin.com/in/marwa-btm/" target="_blank"
                                whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
                                <LinkedinIcon />
                            </motion.a>
                            <motion.a href="https://gitlab.com/btmarwa1" target="_blank"
                                whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
                                <GitlabIcon />
                            </motion.a>

                            <motion.a href="https://www.facebook.com/marwa.btm" target="_blank"
                                whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
                                <FacabookIcon />
                            </motion.a>
                            <motion.a href="https://www.instagram.com/marwa.b.t" target="_blank"
                                whileHover={{ y: -2 }} className="mr-3" whileTap={{ scale: 0.9 }} >
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
                    </motion.div>
                    : null
            }
            <div className="absolute left-[50%] top-2 translate-x-[-50%] z-0 ">
                {/*<Logo />
                <Image src={Logopng} alt="logo MBT" className={"w-20"} />*/}
                <LogoIcon className={"w-2 md:w-0.5"} />
            </div>

        </header>
    )
}

export default Navbar