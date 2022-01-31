import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function NursingLayout({ children }) {
    return (
        <>
            <Header layout="nursing" />
            <SideButtons layout="nursing" />
            <main>
                {children}
            </main>
            <Footer layout="nursing" />
        </>

    )
}