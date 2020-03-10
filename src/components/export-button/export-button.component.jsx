import React, { Component } from 'react';
import Down from '../../down-arrow.png';
import './export-button.styles.css';

class ExportButton extends Component{

  download = (filename, text) => {
        let down = document.createElement('a');
        down.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        down.setAttribute('download', filename);
        down.click();
    }

  render() {
    return (
    <div>
    <button
      className="export-button"
     onClick={(e) => {
       this.download('index.html', '<p>Hello world!</p>');
       this.download('styles.css', 'p {color: red};');
       this.download('script.js', 'alert("hi")');
       }}>
    <img className="export-icon" alt="export" src={Down}></img>

    </button>

    </div>
)}
    }

export default ExportButton;