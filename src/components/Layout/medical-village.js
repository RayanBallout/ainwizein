import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function MedicalVillageLayout({ children }) {
    return (
        <>
            <Header layout="medical-village" />
            <SideButtons layout="medical-village" />
            <main>
                {children}
            </main>
            <Footer layout="medical-village" />
        </>

    )
}