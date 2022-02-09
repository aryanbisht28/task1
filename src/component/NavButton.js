import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const NavButton = () => {
    let navigate = useNavigate();
    return (
        <>
        <div>
        <Button type="dashed" onClick={() => {
                navigate("/counter");
            }}>Counter
        </Button>
        <Button type="text">Text Button</Button>
        <Button type="dashed">Dashed Button</Button>
            {/* <button onClick={() => {
                navigate("/counter");
            }}>Counter</button> */}
        </div>
        
        </>
        

    )
}

export default NavButton;