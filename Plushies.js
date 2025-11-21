import React from "react";
import "./index.css";

export default function PlushieCard(props) {
    return (
        <div className="cardContainer">
            <div className="nameText">{props.name}</div>
            <img className="plushImage" src={props.image} alt="" />
        </div>
    );
}
