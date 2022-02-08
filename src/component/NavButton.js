import React from "react";
import { useNavigate } from "react-router-dom";

const NavButton = () => {
    let navigate = useNavigate();
    return (
        <>
        <div>
            <button onClick={() => {
                navigate("/counter");
            }}>Counter</button>
        </div>
        </>
        

    )
}

export default NavButton;