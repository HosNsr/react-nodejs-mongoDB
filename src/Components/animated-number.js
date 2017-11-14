import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Animatednumber extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : {
                lists : []
            }
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/animatednumber`)
            .then(resp => {
                this.setState({
                    data : resp.data
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
                        this.state.data.lists.map(contest =>{
                            return(
                                <div key={contest._id.toString()} className="col-sm-3 col-xs-6">
                                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
                                        <div className="animated-number" data-digit={contest.number} data-duration="1000"></div>
                                        <strong>{contest.name}</strong>
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

export default Animatednumber;