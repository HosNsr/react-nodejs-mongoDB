import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Services extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result : [],
            services : [],
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/services`)
            .then(resp => {
                this.setState({
                    result: resp.data,
                    services : resp.data.myservices,
                })
            })
            .catch(console.error)
    };
        
    render(){
        return (
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center wow fadeInDown">{this.state.result.title}</h2>
                    <p className="text-center wow fadeInDown">{this.state.result.description}</p>
                </div>
                <div className="row">
                    <div className="features">
                        {
                            this.state.services.map((contest) => {
                                return(
                                    <div key={contest._id.toString()} className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
                                        <div className="media service-box">
                                            <div className="pull-left">
                                                <i className={"fa fa-" + contest.icon}></i>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="media-heading">{contest.title}</h4>
                                                <p>{contest.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> 
            </div>
        )
    }
}

export default Services;