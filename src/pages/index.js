import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import profilPic from "../../public/images/profile/Photo_Prof1-modif4.png"
import bg from "../../public/images/header_bg.jpeg"
import AnimatedText from "../components/AnimatedText"
import Link from "next/link"
import { DownIcon } from "@/components/Icons"
import HireMe from "@/components/HireMe"



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <main className="flex items-center text-dark w-full bg-transparent dark:text-light" style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.7)), url(${bg.src})`
      }}>
        <Layout className="bg-transparent p-20 xl:p-16 lg:p-14 md:p-12 sm:p-8 pb-0 pt-16 xl:pt-16 lg:pt-44 md:pt-10 sm:pt-8" >

          <div className="flex items-center justify-between bg-transparent w-full lg:flex-col" >
            <div className="w-2/5 p-0 md:w-full ">
              <Image src={profilPic} alt="photo profil" className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="w-3/5 text-white flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Im Marwa BEN TAMANSOURT. Full Stack Web Developer"
                className="!text-5xl text-center text-white lg:!text-4xl md:!text-3xl  " />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Passionate about new technologies, I had the opportunity to work as a full-stack Symfony developer for four years.
                Subsequently, I took on the role of project manager for one year. It was a great opportunity to lead a team of developers
                and have daily meetings with Francophone clients.
                After that, I worked as a freelance webmaster and community manager while continuing my masters studies.
              </p>
              <div className="flex items-center  mt-2  justify-start self-start lg:self-center">
                <Link href="/CV_BenTamansourt_Marwa.pdf" target={"_blank"}
                  className="mr-2 flex items-center bg-dark text-light p-2.5 px-4 rounded-lg text-lg lg:text-base  lg:px-2 font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark group" download={true}
                >Resum <DownIcon className={"w-6 ml-4 lg:w-5"} /></Link>


                <Link href="mailto:marwa.bentamansourt@gmail.com" target={"_blank"}
                  className="flex items-center bg-light text-dark p-2.5 px-4
                rounded-lg text-lg font-semibold hover:bg-dark hover:text-light
                border-2 border-solid border-dark hover:border-transparent lg:text-base lg:px-2 "
                >Contact</Link>
              </div>
            </div>
          </div>

        </Layout>
        <HireMe />
      </main>
    </>
  )
}
