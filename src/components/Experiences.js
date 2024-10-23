import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Lilcon from "./Lilcon"

const Details = ({ position, company, companyLink, time, adress, work, tools }) => {
    const ref = useRef(null);
    return (<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-left justify-between ">
        <Lilcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
            <h3 className="capitalize font-bold text-xl lg:text-lg">{position} &nbsp;  @  &nbsp;
                <a target="_blank" className="text-primary capitalize" href={companyLink}>{company}</a>
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                {time} | {adress}
            </span>
            <p className="font-medium w-full">
                {tools}
            </p>
            <p className="font-medium w-full">
                {work}
            </p>
        </motion.div>
    </li>
    )
}
const Experiences = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div id="experiences" className="my-40">
            <h2 className="mt-40 mb-14 text-6xl font-bold w-full text-center lg:text-5xl">
                Experiences
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light " />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details position="WebMaster et community Manager" company="Freelance" companyLink="" time="March 2021 - December 2023"
                        adress="Full Remote" tools="Wordpress, SEO, Meta Business Suite, Gestionnaire des publicités, Canva." work="" />

                    <Details position="Master’s Degree Internship" company="BND Partners" companyLink="" time="September 2022 - november 2022"
                        adress="Houmt souk, Djerba, Tunisia" tools="Webmaster,Wordpress, PHP, React Native, JavaScript, Référencement naturel, Community manager." work="" />

                    <Details position="Projects Manager" company="AppsFactor Tech Teams" companyLink="https://www.linkedin.com/company/appsfactor" time="September 2015 - October 2020"
                        adress="Bizerte, Tunisia"
                        tools="Symfony, JavaScript, CSS, HTML, PHP, Git, Trello, Monday."
                        work="Communicate with Francophone clients, Project Management, Team coordination and supervision" />

                    <Details position="Bachelor’s Degree Internship" company="Multi Business Company" companyLink="" time="February 2015 - May 2015"
                        adress="Bizerte, Tunisia"
                        tools="Wordpress, Administration des sites, Sécurité des sites, Référencement naturel SEO."
                        work="" />

                    <Details position="Bachelor’s Degree Internship" company="Bureau des affaires religieuses" companyLink="" time="February 2013 - May 2013"
                        adress="Houmt souk, Djerba, Tunisia"
                        tools="Céation d une application web en PHP Native."
                        work="" />
                </ul>
            </div>
        </div>
    )
}

export default Experiences