import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout () {
    
    return (
        /// external style for Navlink
        <>
            <nav className="host-nav">
                <NavLink 
                    to="." 
                    end
                    className={({isActive}) => isActive ? "hostStyle" : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="income" 
                    className={({isActive}) => isActive ? "hostStyle" : null}
                >
                     Income
                </NavLink>

                <NavLink 
                    to="vans" 
                    className={({isActive}) => isActive ? "hostStyle" : null}
                >
                    Vans
                </NavLink>

                <NavLink 
                    to="review" 
                    className={({isActive}) => isActive ? "hostStyle" : null}
                >
                    Review
                </NavLink>
            </nav>
        <Outlet />
        </>
    )
}