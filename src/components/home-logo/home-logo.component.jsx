import React from 'react';
import './home-logo.styles.css';
import Play from '../../play.png';

export const PlayButton = () => (
    /*}
    <div className="big_logo">
         <span className="big_open_tag">&#60; </span>
    <span className="big_slash big"> /</span>
    <span className="big_close_tag big">&#62;</span>
    </div>
{*/
    <div className="big_logo">
        <img className="play_button" src={Play}/>
    </div>


)