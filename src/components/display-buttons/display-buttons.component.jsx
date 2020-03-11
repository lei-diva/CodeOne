import React from 'react';
import './display-buttons.styles.css';

export const DisplayButtons = (props) =>
(
    <div className="display_buttons">
    {props.panels.map((panel, id) => (

            <button
                className={`${props.display[id]} display-button`}
                key={id}
                onClick={(e) => {props.change(id, e)}}>
            {panel.toUpperCase()}
            </button>

        )
    )}
    </div>


);
