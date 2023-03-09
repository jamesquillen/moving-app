import React from "react"
import { Navbar, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import logo from "images/White_Logo.png"

const Header = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
}) => {
   return (
    <div className="header-background">
        <Navbar>
                <NavItem>
                    <NavLink to="/" className="ps-3">
                        <img src={logo} alt="white PackRat logo" width="60" height="75" />
                        PackRat
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/about">
                        About 
                    </NavLink>
                </NavItem>

                {!logged_in && (
                <NavItem className="ps-5">
                    <a href={new_user_route}>
                        Sign Up 
                    </a>
                </NavItem>
                 )}

                {!logged_in && (
                <NavItem className="pe-5">
                    <a href={sign_in_route}>
                        Login 
                    </a>
                </NavItem>
                )}

                {logged_in && (
                <NavItem>
                    <NavLink to="/boxindex">
                        My Boxes
                    </NavLink>
                </NavItem>
                )}
               
                {logged_in && (
                <NavItem className="pe-5">
                    <a href={sign_out_route}>
                        Log Out 
                    </a>
                </NavItem>
                )}
        </Navbar>
    </div>
   ) 
}

export default Header;