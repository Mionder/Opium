import React, { Component } from "react";
import "./header.css";
import headerLogo from "./img/header-logo.png";
export default class Header extends Component{
    render(){
        return(
            <div> 
                <header>
                    <div className="container">
                        <div className="header-wrapper header-desktop">
                            <div className="header-left">
                                <ul class="header-left_list">
                                    <li><a class="header-left-item" href="#">UX/UI Design</a></li>
                                    <li><a class="header-left-item" href="#">Usability Testing</a></li>
                                    <li><a class="header-left-item" href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="header-center">
                                <a href="#"><img class="header_logo" src={headerLogo} alt="logo"/></a>
                            </div>
                            <div className="header-right">
                                <ul class="header-left_list">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contacts</a></li>
                                    <li><a href="mailto:ilove@opium.pro">ilove@opium.pro</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-wrap-mobile">
                            <input id="burger" type="checkbox" />
                            <label for="burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>

                            <nav>    
                            <div className="header-mob-open">
                                <ul>
                                    <li><a href="#"><img src={headerLogo} alt="logo"/></a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">UX/UI Design</a></li>
                                    <li><a href="#">Usability Testing</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contacts</a></li>
                                    <li><a href="mailto:ilove@opium.pro">ilove@opium.pro</a></li>
                
                                </ul>  
                            </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}