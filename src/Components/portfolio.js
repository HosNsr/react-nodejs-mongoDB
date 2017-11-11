import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            menu : [],
            posts : []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/portfolio`)
            .then(resp => {
                this.setState({
                    data : resp.data,
                    menu : resp.data.menuselect,
                    posts : resp.data.posts
                });
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
                <div className="text-center">
                    <ul className="portfolio-filter">
                        <li><a className="active" href="#" data-filter="*">همه</a></li>
                        {
                            this.state.menu.map((contest) => {
                                return(
                                    <li key={contest._id.toString()}><a href="#" data-filter={"." + contest.datafilter}>{contest.title}</a></li>                        
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="portfolio-items">
                    {
                        this.state.posts.map((contest) => {
                            return(
                                <div key={contest._id.toString()} className={"portfolio-item " + contest.classList}>
                                    <div className="portfolio-item-inner">
                                        <img className="img-responsive" src={"images/portfolio/" + contest.imgUrl} alt="" />
                                        <div className="portfolio-info">
                                            <h3>{contest.title}</h3>
                                            {contest.description}
                                            <a className="preview" href="images/portfolio/full.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
                                        </div>
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

export default Portfolio;