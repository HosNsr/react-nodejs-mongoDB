import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Components/slides';
import Moreabout from './Components/moreabout'

ReactDOM.render(
    <div>
        <section id="main-slider">
            <Slider />
        </section>
        <section id="cta" className="wow fadeIn">
            <Moreabout />
        </section>
    </div>,
    document.getElementById('root')
)