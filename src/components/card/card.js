import React from "react";
import secondpost from './img/igor-strelkov-girkin_90.jpg';
import wastedImage from './img/stickers-wasted.jpg'; 
import './card.css';

function Card() {
    return(
        <div className="container">
            <div className="left-side">
                <div className="foto">
                    <img src={ secondpost } alt="" className="foto-igor" />
                    <p className="mail">igor@gmail.com</p>
                </div>
                <h1>Igor Litvinov</h1>
                <h2>Terorist</h2>
                <p>live or died!!!</p>
                <p className="reward">Reward:150000$</p>
            </div>
            <div className="right-side">
                <p>Who knows about the location of the call: 08000500001</p>
                <img src={ wastedImage } alt="" className="foto-wasted" />
                <div className="buttons">
                    <input type="button" onClick="health" value="❤" className="health" ></input>
                    <input type="button" onClick="back" value="↺" className="back"></input>
                    <input type="button" onClick="massege" value="✉" className="massege"></input>
                    <input type="button" onClick="call" value="✆" className="call"></input>
                </div>
            </div>
        </div>
    );
}
export  { Card };
