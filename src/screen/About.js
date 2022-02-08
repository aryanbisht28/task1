import React from "react";
import NavButton from "../component/NavButton";
// import { useNavigate } from "react-router-dom";

const About = () => {
    // let navigate = useNavigate();
    return (
        <>
        <div>
            This is the home page
            <NavButton />
            {/* <button onClick={() => {
                navigate("/contact");
            }}>Concept</button> */}
        </div>
        </>
        

    )
}

export default About;