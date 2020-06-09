import React from 'react';
import './display-buttons.styles.css';
import {useSelector, useDispatch} from 'react-redux';
import {toggledisplay} from '../../actions';
import {Nav} from 'react-bootstrap';

export const DisplayButtons = () =>
{
    const panels = useSelector(state=>state.playground.panels);
    const dispatch = useDispatch();
    let dis;

    return (

        Object.keys(panels).map((panel, id) =>
            {
                panels[panel].display?
                    dis = "show":
                    dis = "hide"


                return (

            <Nav.Link
                className={`${dis} display-button`}
                key={id}
                onClick = {()=>dispatch(toggledisplay(panel))}
            >
            {panel.toUpperCase()}
            </Nav.Link>
                )

        }
        )


    );
}
