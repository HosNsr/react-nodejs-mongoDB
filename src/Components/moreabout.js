import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Moreabout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            more: []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/moreabout`)
            .then(resp => {
                this.setState({
                    more: resp.data
                })
            })
        .catch(console.error)
    };
        
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 content-row">
                        <h2>{this.state.more.title}</h2>
                        <p>{this.state.more.description}</p>
                    </div>
                    <div className="col-sm-3 text-right button-row">
                        <a className="btn btn-primary btn-lg" href="#">{this.state.more.btntitle}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moreabout;