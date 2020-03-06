import React from 'react';
import "./panel.styles.css"

export const Panel = (props) => (
    <div className="panel">
    <label>
        <span className="langtitle">{props.name}</span>
        <textarea
        placeholder="Code here..."
        onChange={props.handleChange}
        ></textarea>
    </label>
    </div>
);