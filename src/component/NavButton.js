import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import './Nav.css';

const NavButton = () => {
    let navigate = useNavigate();
    return (
        <>
        <div>
        <Button className="button" type="primary"  onClick={() => {
                navigate("/counter"); }}>
         Counter
         </Button> 
        </div>
        
        </>
        

    )
}

export default NavButton;