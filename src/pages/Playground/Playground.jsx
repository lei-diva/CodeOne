import React, {Component} from 'react';
import PanelList from '../../components/panel-list/panel-list.component';
import { PlaygroundNavBar } from '../../components/playgroundnavbar/playgroundnavbar.component';
import { Footer } from '../../components/footer/footer.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import './Playground.css';
import {withRouter} from 'react-router-dom';
import {addCollectionandDocuments} from '../../firebase/firebase.utils';
import {HomeNav} from '../../components/home-nav-bar/home-nav-bar.component';


const Playground = () => {
/*
  componentWillMount(){
    try { /
      this.setState({content: this.props.location.state.content, projectname: this.props.location.state.projectname});
    } catch (error) {
      console.log('New project');
    }

  }
  put in output.js
  */

  /* put in projectname.js
  changeProjectName = (e) => {
    this.setState({projectname: e.target.value}); /* Save project title name for export
  }

*/
/*move to playground navbar
  changeDisplay = (id, e) =>{
    let display_status = this.state.display[id];
    let display_copy = this.state.display;

    if (display_status === "show") {
      display_copy[id] = "hide";
      this.setState({display: display_copy});
    }
    else {
      display_copy[id] = "show";
      this.setState({display: display_copy});
    }
  }

  */


    return (
      <div className="general">

      <PlaygroundNavBar/>
      <Container className="panellist">
        <PanelList/>
        <Footer/>
      </Container>






      </div>
    );
  }

export default withRouter(Playground);
