import React from 'react';
import {Carousel} from 'react-bootstrap';
import firstslide from '../../first-slide.mp4';
import first from '../../first-slide.png';
import second from '../../second-slide.png';
import prevIcon from '../../back.png';
import './slide-show.styles.css';

export const SlideShow = () => (
<Carousel interval="6000" className="carousel" prevIcon={<span id="prevIcon">&#60;</span>} nextIcon={<span id="nextIcon">&#62;</span>}>
  <Carousel.Item className="item">
            <img className="slides" src={first}></img>
          <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item">


    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item">
{/*
            <video autoplay muted controls>
              <source src={firstslide} type="video/mp4"></source>
</video>*/}

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);