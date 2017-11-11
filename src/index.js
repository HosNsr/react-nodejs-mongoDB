import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Components/slides';
import Moreabout from './Components/moreabout';
import Moreproperty from './Components/moreproperty';
import Somecustomer from './Components/somecustomer';
import Services from './Components/services';
import Portfolio from './Components/portfolio';

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
    </div>,
    document.getElementById('root')
)