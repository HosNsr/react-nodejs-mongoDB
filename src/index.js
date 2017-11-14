import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Components/slides';
import Moreabout from './Components/moreabout';
import Moreproperty from './Components/moreproperty';
import Somecustomer from './Components/somecustomer';
import Services from './Components/services';
import Portfolio from './Components/portfolio';
import About from './Components/about';
import Workprocess from './Components/work-process';
import Meetteam from './Components/meet-team';
import Animatednumber from './Components/animated-number';
import Testimonial from './Components/testimonial';
import Blog from './Components/blog';

ReactDOM.render(
    <div>
        <section id="main-slider">
            <Slider />
        </section>
        <section id="cta" className="wow fadeIn">
            <Moreabout />
        </section>
        <section id="features">
            <Moreproperty />
        </section>
        <section id="cta2">
            <Somecustomer />
        </section>
        <section id="services" >
            <Services />
        </section>
        <section id="portfolio">
            <Portfolio />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="work-process">
            <Workprocess />
        </section>
        <section id="meet-team">
            <Meetteam />
        </section>
        <section id="animated-number">
            <Animatednumber />
        </section>
        <section id="testimonial">
            <Testimonial />
        </section>
        <section id="blog">
            <Blog />
        </section>
    </div>,
    document.getElementById('root')
)