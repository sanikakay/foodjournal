import React from "react"
import icon from '../images/icon.png'

export default function Card(props) {
    return(
        <card className="card">
            <img src={props.imageUrl} className="mainimg" />
            <div className="content">
                <tinyinfo className="tinyinfo">
                    <img src={icon} height="11px" />
                    <span className="cuisine">{props.cuisine}</span>
                    <span><a className="recipelink" href={props.recipeUrl} >View Recipe</a></span>
                </tinyinfo>
                <h2>{props.title}</h2>
                <p><b>Cook Date:</b> {props.cookDate}</p>
                <p>{props.description}</p>    
            </div>       
            <hr/>     
        </card>
    )
}