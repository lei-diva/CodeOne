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
       this.download(this.props.file_names[0], this.props.html);
       this.download(this.props.file_names[1], this.props.css);
       this.download(this.props.file_names[2], this.props.js);
       }}>
    <img className="export-icon" alt="export" src={Down}></img>

    </button>

    </div>
)}
    }

export default ExportButton;