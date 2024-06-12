import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const FooterPrincipal = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light">
            <Layout className="py-4 md:py-1 px-40 lg:px-20 md:px-10 text-center flex justify-between bg-transparent flex items-center lg:flex-col">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center">
                    Build with <span className="text-primary dark:text-secondary text-xl lg:text-lg px-1">&#9825;</span> by Marwa Ben Tamansourt
                </div>
            </Layout>
        </footer>
    )
}

export default FooterPrincipal