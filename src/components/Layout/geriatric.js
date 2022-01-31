import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function GeriatricLayout({ children }) {
    return (
        <>
            <Header layout="geriatric" />
            <SideButtons layout="geriatric" />
            <main>
                {children}
            </main>
            <Footer layout="geriatric" />
        </>

    )
}