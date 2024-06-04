import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const FooterPrincipal = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light">
            <Layout className="py-4 px-40 text-center flex justify-between bg-transparent">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center">
                    Build with <span className="text-primary dark:text-secondary text-2xl px-1">&#9825;</span> by Marwa Ben Tamansourt
                </div>
            </Layout>
        </footer>
    )
}

export default FooterPrincipal