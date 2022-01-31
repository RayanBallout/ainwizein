import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function HospitalLayout({ children }) {
    return (
        <>
            <Header layout="hospital" />
            <SideButtons layout="hospital" />
            <main>
                {children}
            </main>
            <Footer layout="hospital" />
        </>

    )
}