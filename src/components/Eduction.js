import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Lilcon from "./Lilcon"

const Details = ({ position, company, companyLink, time, adress, tools }) => {
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
        </motion.div>
    </li>
    )
}
const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className="my-40">
            <h2 className="mt-40 mb-14 text-6xl font-bold w-full text-center">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light " />
                <ul className="w-full flex flex-col items-start justify-between ml-4">

                    <Details position="MERN Stack Training" company="Tunisia Development Foundation" companyLink="https://fondationtunisie.org/" time="August 2023 - September 2023"
                        adress="Djerba, Tunisia"
                        tools="HTML5, CSS, Mongo DB, Express JS, React JS, Node JS" />

                    <Details position="Master in information and communication technologies" company="Higher Institute of Technology Studies of Djerba" companyLink="http://www.isetjb.rnu.tn/" time="September 2020 - June 2022"
                        adress="Djerba, Tunisia" />

                    <Details position="TCF (Test de connaissance du français)" company="France Education international" companyLink="https://www.france-education-international.fr/" time="March 2020 - March 2022"
                        adress="Bizerte, Tunisia" />

                    <Details position="Bachelor in Administration and Website Referencing" company="Higher Institute of Technology Studies of Djerba" companyLink="http://www.isetjb.rnu.tn/" time="September 2014 - June 2015"
                        adress="Djerba, Tunisia" />

                    <Details position="Bachelor’s Degree in Computer Technology" company="Higher Institute of Technology Studies of Djerba" companyLink="http://www.isetjb.rnu.tn/" time="September 2009 - June 2013"
                        adress="Djerba, Tunisia" />

                </ul>
            </div>
        </div>
    )
}

export default Education