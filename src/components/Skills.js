import React from "react"
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light
         text-lg md:text-base md:p-2"
            whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
            {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <div id="skills" >
            <h2 className="mt-40 mb-10 text-6xl font-bold w-full text-center lg:text-5xl">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <Skill name="Web" x="0vw" y="0vw" />
                <Skill name="Symfony" x="-19vw" y="-2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="22vw" y="6vw" />
                <Skill name="Laravel" x="8vw" y="8vw" />
                <Skill name="Trello" x="0vw" y="16vw" />
                <Skill name="PHP" x="19vw" y="-2vw" />
                <Skill name="Bootstrap" x="16vw" y="-12vw" />
                <Skill name="HTML" x="-18vw" y="-15vw" />
                <Skill name="NextJS" x="37vw" y="-5vw" />
                <Skill name="Monday" x="8vw" y="-22vw" />
                <Skill name="Windev" x="-34vw" y="-10vw" />
                <Skill name="Wordpress" x="-20vw" y="8vw" />
                <Skill name="GitLab / Github" x="-35vw" y="5vw" />
                <Skill name="ReactJS" x="-25vw" y="16vw" />
                <Skill name="Jira" x="-6vw" y="22vw" />
                <Skill name="Canva" x="40vw" y="10vw" />
                <Skill name="Tailwind CSS" x="19vw" y="19vw" />
            </div>
        </div>
    )
}

export default Skills