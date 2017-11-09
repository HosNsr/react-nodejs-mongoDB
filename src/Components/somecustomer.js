import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Somecustomer extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/somecustomer`)
            .then(resp => {
                this.setState({
                    data: resp.data
                })
            })
            .catch(console.error)
    };
    
    render(){
        return (
            <div className="container">
                <div className="text-center">
                    <h2 className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">{this.state.data.title}</h2>
                    <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">{this.state.data.description}</p>
                    <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms"><a className="btn btn-primary btn-lg" href="#">{this.state.data.btntitle}</a></p>
                    <img className="img-responsive wow fadeIn" src="images/cta2/cta2-img.png" alt="" data-wow-duration="300ms" data-wow-delay="300ms" />
                </div>
            </div>
        )
    }
}

export default Somecustomer;