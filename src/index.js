import React from 'react';
import ReactDOM from 'react-dom';
import SliderLists from './Components/slides';
import data from './SliderData';

var divStyle = {}
divStyle = data;

ReactDOM.render(
    <section id="main-slider">
        <SliderLists slides={divStyle} />
    </section>,
    document.getElementById('root')
)