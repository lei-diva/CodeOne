import React from 'react';
import { Navbar} from 'react-bootstrap';
import "./navbar.styles.css";
import { DisplayButtons } from "../display-buttons/display-buttons.component";
import ExportButton from "../export-button/export-button.component";

export const NavBar = ({panels, change, display}) => (
<Navbar bg="light">
    <Navbar.Brand href="#">iCode</Navbar.Brand>
    <DisplayButtons
    panels={panels}
    change={change}
    display={display}
    >

    </DisplayButtons>
    <ExportButton></ExportButton>

</Navbar>
);