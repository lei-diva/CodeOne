import React from 'react';
import { Navbar, Form} from 'react-bootstrap';
import "./navbar.styles.css";
import { DisplayButtons } from "../display-buttons/display-buttons.component";
import ExportButton from "../export-button/export-button.component";


export const NavBar = ({panels, change, display, project, projectname, homepath}) => (
<Navbar className="navbar">

    <Navbar.Brand className="logo" href={homepath}>
    <span className="logo_open_tag">&#60; </span>
    <span className="logo_slash"> /</span>
    <span className="logo_close_tag">&#62;</span>
    </Navbar.Brand>
    <Form.Control spellCheck="false" type="text" className="project_title form-control" placeholder="Untitled"
    value={projectname} onChange={project}></Form.Control>
    <DisplayButtons
    className="display_buttons"
    panels={panels}
    change={change}
    display={display}
    >
    </DisplayButtons>



</Navbar>
);