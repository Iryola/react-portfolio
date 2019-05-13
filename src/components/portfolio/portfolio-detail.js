import React from "react";
// import { Link } from "react-router-dom"
// import PortfolioContainer from "../portfolio/portfolio-container";

export default function (props) {
    return (
    <div>
    <h2>Portfolio Detail for {props.match.params.slug}</h2>
    {/* <PortfolioContainer /> */}
    </div>
    );
}