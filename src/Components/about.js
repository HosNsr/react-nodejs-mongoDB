import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            video : [],
            briefintroduction : [],
            propertic : []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/about`)
            .then(resp => {
                this.setState({
                    data: resp.data,
                    video : resp.data.video,
                    briefintroduction : resp.data.briefintroduction,
                    propertic : resp.data.briefintroduction.propertic
                })
            })
        .catch(console.error)
    };
        
    render(){
        return (
            <div className="container">
            
                <div className="section-header">
                    <h2 className="section-title text-center wow fadeInDown">{this.state.data.titile}</h2>
                    <p className="text-center wow fadeInDown">{this.state.data.description}</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 wow fadeInLeft">
                        <h3 className="column-title">{this.state.video.titile}</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {/* <iframe src={this.state.video.videoUrl} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
                        </div>
                    </div>

                    <div className="col-sm-6 wow fadeInRight">
                        <h3 className="column-title">{this.state.briefintroduction.titile}</h3>
                        <p>{this.state.briefintroduction.description}</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="nostyle">
                                    {
                                        this.state.propertic.map((contest,number) => {
                                            if(number < 2 ){
                                                return(
                                                    <li key={contest._id.toString()}><i className="fa fa-check-square"></i>{" " + contest.name}</li>                                    
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <ul className="nostyle">
                                    {
                                        this.state.propertic.map((contest,number) => {
                                            if(number > 1 ){
                                                return(
                                                    <li key={contest._id.toString()}><i className="fa fa-check-square"></i>{" " + contest.name}</li>                                    
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <a className="btn btn-primary" href="#">{this.state.data.btntitile}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;