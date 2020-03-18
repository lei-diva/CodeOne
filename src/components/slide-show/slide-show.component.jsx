import React from 'react';
import {Carousel} from 'react-bootstrap';
import first from '../../first-slide.png';

import second from '../../second-slide.png';
import third from '../../third-slide.png';

import prevIcon from '../../back.png';
import './slide-show.styles.css';

export const SlideShow = () => (
<Carousel interval="6000" className="carousel" prevIcon={<span id="prevIcon">&#60;</span>} nextIcon={<span id="nextIcon">&#62;</span>}>
  <Carousel.Item className="item">
            <img className="slides" src={first}></img>
          <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item">
  <img className="slides" src={second}></img>

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item">
  <img className="slides" src={third}></img>

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);