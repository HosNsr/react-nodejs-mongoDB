import React from 'react';
import ReactDOM from 'react-dom';

const SliderLists = (props)=>{
    const mySlides = props.slides;
    const listItem = mySlides.basicStyle.map((contest) =>
        <div key={contest.id.toString()} className="item" style={contest.backgroundImages}>
            <div className="slider-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="carousel-content">
                                <h2><span> شرکت ما </span>{contest.title}</h2>
                                <p>{contest.description}</p>
                                <a className="btn btn-primary btn-lg" href="#">بیشتر بخوانید</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return(
        <div className="owl-carousel">{listItem}</div>
    )
}

export default SliderLists;