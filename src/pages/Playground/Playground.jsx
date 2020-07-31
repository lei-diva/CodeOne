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
