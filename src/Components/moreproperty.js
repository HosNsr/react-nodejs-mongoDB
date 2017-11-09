import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Moreproperty extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            more: [],
            image : "",
            propertys : []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/moreproperty`)
            .then(resp => {
                this.setState({
                    more: resp.data[0],
                    image : resp.data[0].backgroundImages.backgroundImage,
                    propertys : resp.data[0].propertys
                })
            })
        .catch(console.error)
    };
        
    render(){
        return (
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center wow fadeInDown">{this.state.more.title}</h2>
                    <p className="text-center wow fadeInDown">{this.state.more.description}</p>
                </div>
                <div className="row">
                    <div className="col-sm-6 wow fadeInLeft laptop-row">
                        <img className="img-responsive" alt="" src={this.state.image} />
                    </div>
                    <div className="col-sm-6 features-row">
                        {
                            this.state.propertys.map((contest) => {
                                return (
                                    <div key={contest._id} className="media service-box wow fadeInRight">
                                        <div className="pull-left">
                                            <i className={"fa fa-" + contest.icon}></i>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading">{contest.titleprop}</h4>
                                            <p>{contest.descriptionprop}</p>
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

export default Moreproperty;