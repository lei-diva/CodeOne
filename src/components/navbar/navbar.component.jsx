import React from 'react';
import { Navbar} from 'react-bootstrap';
import "./navbar.styles.css";
import { DisplayButtons } from "../display-buttons/display-buttons.component";
import ExportButton from "../export-button/export-button.component";


export const NavBar = ({panels, change, display}) => (
<Navbar className="navbar">
    <Navbar.Brand className="logo" href="/">
    <span className="logo_open_tag">&#60; </span>
    <span className="logo_slash"> /</span>
    <span className="logo_close_tag">&#62;</span>
    </Navbar.Brand>
    <h1 className="project_title" contentEditable="true">Project Title</h1>
    <DisplayButtons
    className="display_buttons"
    panels={panels}
    change={change}
    display={display}
    >
    </DisplayButtons>
    <ExportButton className="export_button"></ExportButton>


</Navbar>
);