import React from "react"
import logo from "../images/logo.png"

export default function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} width="40px"/>
            <h3>My Food Journal</h3>
        </nav>
    )
}