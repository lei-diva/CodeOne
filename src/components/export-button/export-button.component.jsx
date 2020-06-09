import React, { Component } from 'react';
import Down from '../../images/export.png';
import './export-button.styles.css';
import {useSelector} from 'react-redux';
import {Nav, OverlayTrigger, Tooltip} from 'react-bootstrap';

const ExportButton =() => {
  const {Html, Css, Js} = useSelector(state=> state.playground.panels);


  const download = (filename, text) => {       /*Export feature */
        let down = document.createElement('a');
        down.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        down.setAttribute('download', filename);
        down.click();

    }

    return (

      <OverlayTrigger
      placement='bottom'
      className="tooltip"
        overlay={
          <Tooltip>
            Export
          </Tooltip>
        }
      >
    <Nav.Link className="export" onClick={(e) => {
       download(Html.filename, Html.content);
       download(Css.filename, Css.content);
       download(Js.filename, Js.content);
       }}>
    <img className="export-button" src={Down}></img>
    <span className="display-button text">Export</span>
    </Nav.Link>
    </OverlayTrigger>


)}


export default ExportButton;