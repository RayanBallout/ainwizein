import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function MedicalCenterLayout({ children }) {
    return (
        <>
            <Header layout="medical-center" />
            <SideButtons layout="medical-center" />
            <main>
                {children}
            </main>
            <Footer layout="medical-center" />
        </>

    )
}