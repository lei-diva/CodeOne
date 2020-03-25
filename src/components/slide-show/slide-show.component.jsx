import React from 'react';
import {Carousel} from 'react-bootstrap';
import first from '../../images/first-slide.png';
import second from '../../images/second-slide.png';
import third from '../../images/third-slide.png';
import fourth from '../../images/fourth-slide.png';
import fifth from '../../images/fifth-slide.png';
import './slide-show.styles.css';

export const SlideShow = () => (
  <div>
  <div className="features-title">Features</div>
<Carousel interval="3000" className="carousel" prevIcon={<span id="prevIcon">&#60;</span>} nextIcon={<span id="nextIcon">&#62;</span>}>
  <Carousel.Item className="item">
            <img className="slides" src={first}></img>
  </Carousel.Item>

  <Carousel.Item className="item">
  <img className="slides" src={second}></img>
  </Carousel.Item>

  <Carousel.Item className="item">
  <img className="slides" src={third}></img>
  </Carousel.Item>

  <Carousel.Item className="item">
            <img className="slides" src={fourth}></img>

  </Carousel.Item>

  <Carousel.Item className="item">
            <img className="slides" src={fifth}></img>

  </Carousel.Item>
</Carousel>
</div>
);