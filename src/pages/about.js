import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"
import aboutprofilPic from "../../public/images/profile/aboutprofil_photo.jpg"
import Image from "next/image"
import Skills from "@/components/Skills"
import Experiences from "@/components/Experiences"
import Education from "@/components/Eduction"

const about = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="about page de Marwa Ben Tamansourt" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center px-[4%]">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" />
                    <div className=" mt-8 flex items-center justify-between bg-transparent w-full lg:flex-col">
                        <div className=" w-3/5 flex flex-col items-center self-center p-[2%] lg:w-full ">
                            <h2 className="my-6 text-xl font-bold uppercase text-dark/75 dark:text-light/75">Biogtaphy</h2>
                            <p className="font-medium mb-6">
                                Passionate about new technologies, I had the opportunity to work as a full-stack Symfony developer for 4 years.
                                Then I took on the role of project manager for a year.
                            </p>
                            <p className="font-medium mb-6">
                                Holder of a master’s degree in information technology and communication, my studies and my professional experience allowed me to acquire the knowledge and skills essential to the exercise of this profession.
                            </p>
                            <p className="font-medium mb-6">
                                I master computer languages such as PHP, JAVAScript, Typescript, CSS and HMTL.
                                I am also familiar with development environments like Symfony, Laravel, react JS, Next Js, Also I worked freelance on WordPress as webmaster and community manager.
                            </p>
                            <p className="font-medium">
                                My ability to solve problems, my taste for teamwork and my determination are all assets that will be valuable to integrate into companies.
                            </p>
                        </div>

                        <div className="w-2/5 m-2 p-[3%] lg:hidden rounded-2xl border-2 border-solid border-dark bg-transparent dark:border-light drop-shadow-md">
                            <Image src={aboutprofilPic} alt="profile photo" className="rounded-2xl" priority sizes="(max-width: 200px) 80vw, (max-width: 300px) 40vw, 25vw" />
                        </div>
                    </div>
                    <Skills />
                    <Experiences />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about