import React from "react"

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className} bg-transparent dark:text-light`}>
      {children}
    </div>
  )
}

export default Layout