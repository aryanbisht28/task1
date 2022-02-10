import { Carousel } from "antd";
import React from "react";
import CardComp from "../component/CardComp";
import CarouselComp from "../component/CarouselComp";
import NavButton from "../component/NavButton";
import './About.css'

const About = () => {
    return (
        <>
        <div>
            <CarouselComp />
            <div className="card">
            <CardComp />
            <CardComp />
            <CardComp />
            </div>
            <NavButton />
        </div>
        </>
        

    )
}

export default About;