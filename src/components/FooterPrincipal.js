import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const FooterPrincipal = () => {
    return (
        <footer  className='w-full border-t-2 border-solid border-dark
        font-medium text-lg'>
            <Layout className='py-4 text-center'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            </Layout>
        </footer>
    )
}

export default FooterPrincipal