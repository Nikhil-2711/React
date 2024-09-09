import React from "react";
import Logo from "./logo";

const Navbar=({children})=>{
    return(
        <>
            <div className="nav-bar">
                <Logo/>
                {children}
            </div>
        </>
    )
}
export default Navbar