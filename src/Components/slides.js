import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SliderDATA: []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/slider`)
            .then(resp => {
                this.setState({
                    SliderDATA: resp.data
                })
            })
            .catch(console.error)
    };

    render() {
        return (
            <div className="owl-carousel">
                {
                    this.state.SliderDATA.map((contest) =>{
                        return(
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
                        )
                    })
                }
            </div>
        )
    }
}

export default Slider;