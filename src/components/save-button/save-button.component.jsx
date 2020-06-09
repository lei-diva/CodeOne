import React from 'react';
import './save-button.styles.css';
import {useSelector} from 'react-redux';
import SaveIcon from '../../images/save.png';
import {Nav, OverlayTrigger, Tooltip} from 'react-bootstrap';

export const SaveButton = () => {
    const userRef = useSelector(state=>state.userRef);
    const projectname = useSelector(state=>state.playground.projectname);
    const {Html, Css, Js} = useSelector(state=>state.playground.panels);

    const updateProject = () => {


        if (!projectname){
            alert("Missing project title");
            return;
        }
        userRef.collection('projects').doc(projectname).set({
          Html: Html.content,
          Css: Css.content,
          Js: Js.content,
          date: new Date()
        })
        .then()
        .catch( (error)=> {
          console.log(error);
        });

      }

      return (
        <OverlayTrigger
      placement='bottom'
      className="tooltip"
        overlay={
          <Tooltip>
            Save
          </Tooltip>
        }
      >
        <Nav.Link className="save-text" onClick={updateProject}>
            <img className="save_button" src={SaveIcon}/>
            <span className="display-button text">Save</span>
        </Nav.Link>
        </OverlayTrigger>
      )

}
