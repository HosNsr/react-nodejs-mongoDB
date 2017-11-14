import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Testimonial extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/testimonial`)
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
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">

                        <div id="carousel-testimonial" className="carousel slide text-center" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                {
                                    this.state.data.map((contest,number) => {
                                        if(number == 0){
                                            return(
                                                <div key={contest._id.toString()} className="item active">
                                                    <p><img className="img-circle img-thumbnail" src={"images/testimonial/" + contest[0].imgUrl} alt="" /></p>
                                                    <h4>{contest[0].name}</h4>
                                                    <small>{contest[0].position}</small>
                                                    <p>{contest[0].description}</p>
                                                </div>
                                            )
                                        }else {
                                            return(
                                                <div key={contest._id.toString()} className="item">
                                                    <p><img className="img-circle img-thumbnail" src={"images/testimonial/" + contest[0].imgUrl} alt="" /></p>
                                                    <h4>{contest[0].name}</h4>
                                                    <small>{contest[0].position}</small>
                                                    <p>{contest[0].description}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>

                            <div className="btns">
                                <a className="btn btn-primary btn-sm" href="#carousel-testimonial" role="button" data-slide="prev">
                                    <span className="fa fa-angle-left" aria-hidden="true"></span>
                                    <span className="sr-only">قبل</span>
                                </a>
                                <a className="btn btn-primary btn-sm" href="#carousel-testimonial" role="button" data-slide="next">
                                    <span className="fa fa-angle-right" aria-hidden="true"></span>
                                    <span className="sr-only">بعد</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;