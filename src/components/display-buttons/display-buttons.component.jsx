import React from 'react';

import './display-buttons.styles.css';

export const DisplayButtons = (props) =>
(
    props.panels.map((panel, id) => (
            <button
                className={props.display[id]}
                key={id}
                onClick={(e) => {props.change(id, e)}}>
            {panel}
            </button>

        )
    )

);
