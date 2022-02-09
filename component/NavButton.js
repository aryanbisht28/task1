import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const NavButton = () => {
    let navigate = useNavigate();
    return (
        <>
        <div>
        <Button type="primary"  onClick={() => {
                navigate("/counter"); }}>
         Counter
         </Button> 
        </div>
        
        </>
        

    )
}

export default NavButton;