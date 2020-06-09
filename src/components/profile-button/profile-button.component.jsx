import React from 'react';
import './profile-button.styles.css';
import {withRouter, Link} from 'react-router-dom';
import ProfileIcon from '../../images/profile1.png';
import {useSelector} from 'react-redux';
import SignOut from '../sign-out/sign-out.component';
import {Nav, OverlayTrigger, Tooltip, DropdownButton, Dropdown} from 'react-bootstrap';

const ProfileButton = (props) => {
    const user = useSelector(state => state.currentUser);

return (


<Nav.Link>
<Dropdown alignRight>
  <Dropdown.Toggle className="profile-menu">
  <img className="export-button" src={ProfileIcon}/>
  </Dropdown.Toggle>

  <Dropdown.Menu className="profile-drop-down">
        <span className="dropdown-name">{user.displayName}</span>

    <Dropdown.Divider />
    <Dropdown.Item className={`profile-nav-home ${props.className}`} onClick={() => {props.history.push('/')}}>Home</Dropdown.Item>

    <Dropdown.Item className={`profile-nav-playground ${props.className}`} onClick={() => {props.history.push('/playground')}}>Playground</Dropdown.Item>

    <Dropdown.Item onClick={() => {props.history.push('profile')}}>My Projects</Dropdown.Item>

    <Dropdown.Divider />
    <SignOut className="dropdown-signout"/>

  </Dropdown.Menu>
</Dropdown>
<span onClick={() => {props.history.push('profile')}} className="display-button text">My Projects</span>
</Nav.Link>



);
}

export default withRouter(ProfileButton);

{/*}
        <Nav.Link>

            <img className="export-button" src={ProfileIcon}/>
            <span className="display-button text">Profile</span>
        </Nav.Link>
{*/}
