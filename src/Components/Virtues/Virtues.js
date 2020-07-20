import React, { Component } from "react";
import "./virtues.css";
import virtue1 from "./img/block1.png";
import virtue2 from "./img/block2.png";
export default class Virtues extends Component{
    render(){
        return(
            <div className="virtues">
                <div className="blue-blur"></div>
                <div className="viollet-blur"></div>
                <div className="container">
                    <div className="virtues-wrapper">
                        <div className="virtues-block">
                            <img src={virtue1} alt="UX/UI Design" />
                            <h3>UX/UI Design</h3>
                            <p>8 years experience with big brojects</p>
                        </div>
                        <div className="virtues-block">
                            <img src={virtue2} alt="Usability Testing" />
                            <h3>Usability Testing</h3>
                            <p>Help you find the weakest parts in your UX at early stage</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}