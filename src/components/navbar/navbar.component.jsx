import React from 'react';
import { Navbar} from 'react-bootstrap';
import "./navbar.styles.css";
import { DisplayButtons } from "../display-buttons/display-buttons.component";
import ExportButton from "../export-button/export-button.component";
import Logo from '../../logo.png';

export const NavBar = ({panels, change, display}) => (
<Navbar className="navbar">
    <Navbar.Brand href="#"><img className="logo" src={Logo} alt="< Code 1 />" /></Navbar.Brand>
    <DisplayButtons
    panels={panels}
    change={change}
    display={display}
    >

    </DisplayButtons>
    <ExportButton></ExportButton>

</Navbar>
);