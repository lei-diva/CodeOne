import React, {useState} from 'react';
import './save-button.styles.css';
import {useSelector} from 'react-redux';
import SaveIcon from '../../images/save.png';
import {Nav, OverlayTrigger, Tooltip, Toast} from 'react-bootstrap';


export const SaveButton = () => {
    const userRef = useSelector(state=>state.userRef);
    const projectname = useSelector(state=>state.playground.projectname);
    const {Html, Css, Js} = useSelector(state=>state.playground.panels);
    const [nameError, setnameError] = useState(false);
    const [saved, setSaved] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const togglenameError = () => setnameError(!nameError);

    const toggleErrorMsg = () => setErrorMsg(!errorMsg);


    const updateProject = () => {



        if (!projectname){
            togglenameError();
            return;
        }
        setnameError(false);
        userRef.collection('projects').doc(projectname).set({
          Html: Html.content,
          Css: Css.content,
          Js: Js.content,
          date: new Date()
        })
        .then( () => {
          setSaved(true);
        })
        .catch( (error)=> {
          toggleErrorMsg();
        });

      }

      return (
        <>
        <OverlayTrigger
      placement='bottom'
      className="tooltips"
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
        <Toast show={nameError} onClose={togglenameError}>
          <Toast.Header>
            <strong className="mr-auto">Missing Project Title</strong>
          </Toast.Header>

        </Toast>

       <Toast onClose={() => setSaved(false)} show={saved} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Saved</strong>
          </Toast.Header>

        </Toast>

        <Toast show={errorMsg} onClose={toggleErrorMsg}>
          <Toast.Header>
            <strong className="mr-auto">Error! Please try again later.</strong>
          </Toast.Header>

        </Toast>

      </>
      )

}
