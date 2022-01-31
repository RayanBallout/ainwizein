import React from "react"
import "./Layout.css"

// components
import Header from "../Header"
import SideButtons from "../SideButtons"
import Footer from "../Footer"

export default function HomeCareLayout({ children }) {
    return (
        <>
            <Header layout="home-care" />
            <SideButtons layout="home-care" />
            <main>
                {children}
            </main>
            <Footer layout="home-care" />
        </>

    )
}