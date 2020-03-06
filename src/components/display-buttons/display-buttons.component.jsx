import React from 'react';
import { Button } from 'react-bootstrap';
import './display-buttons.styles.css';

export const DisplayButtons = (props) =>
(
    props.panels.concat("Output").map((panel, id) => (
            <Button variant="light"
                className={props.display[id]}
                key={id}
                onClick={(e) => {props.change(id, e)}}>
            {panel}
            </Button>

        )
    )

);
