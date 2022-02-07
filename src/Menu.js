import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <>
        <Link to='/'> About </Link>
        <Link to='/contact'> Contat </Link>
        </>
    )
}

export default Menu;