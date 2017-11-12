import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Workprocess extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            processes : []                
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/workprocess`)
            .then(resp => {
                this.setState({
                    data : resp.data,
                    processes : resp.data.processes
                })
            })
        .catch(console.error)
    };
        
    render(){
        return (
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center wow fadeInDown">{this.state.data.title}</h2>
                    <p className="text-center wow fadeInDown">{this.state.data.description}</p>
                </div>
                <div className="row text-center">
                    {
                        this.state.processes.map((contest,number) => {
                            return(
                                <div key={contest._id.toString()} className="col-md-2 col-md-4 col-xs-6">
                                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
                                        <div className="icon-circle">
                                            <span>{number + 1}</span>
                                            <i className={"fa fa-" + contest.icon + " fa-2x"}></i>
                                        </div>
                                        <h3>{contest.name}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Workprocess;