import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function OncologyLayout({ children }) {
    return (
        <>
            <Header layout="oncology" />
            <SideButtons layout="oncology" />
            <main>
                {children}
            </main>
            <Footer layout="oncology" />
        </>

    )
}