import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

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
    <Button variant="dark"
     onClick={(e) => {this.download('test.html', '<p>Hello world!</p>')}}>
    Export
    </Button>

    </div>
)}
    }

export default ExportButton;