import React from "react"
import "./style.css"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./components/data"

export default function App() {
    const cardData = data.map(prop => {
        return <Card 
        key = {prop.id}
        {...prop}
        />
    })
    return (
        <>
            <Nav />
            <section className="cardbox">
                {cardData}
            </section>
        </>
    )
}