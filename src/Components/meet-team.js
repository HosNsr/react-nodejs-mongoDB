import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Meetteam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            people: [],
            abilityname: "",
            ability: [],
            historyname: "",
            history : [],
            qaname : "",
            qa : []
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/meetteam`)
            .then(resp => {
                this.setState({
                    data: resp.data,
                    people: resp.data.people,
                    abilityname: resp.data.ability.title,
                    ability: resp.data.ability.lists,
                    historyname: resp.data.history.title,
                    history : resp.data.history.lists,
                    qaname : resp.data.qa.title,
                    qa : resp.data.qa.lists
                })
            })
            .catch(console.error)
    };

    render() {
        return (
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center wow fadeInDown">{this.state.data.title}</h2>
                    <p className="text-center wow fadeInDown">{this.state.data.description}</p>
                </div>

                <div className="row">
                    {
                        this.state.people.map((contest) => {
                            return (
                                <div key={contest._id.toString()} className="col-sm-6 col-md-3">
                                    <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
                                        <div className="team-img">
                                            <img className="img-responsive" src={"images/team/" + contest.imgUrl} alt="" />
                                        </div>
                                        <div className="team-info">
                                            <h3>{contest.name}</h3>
                                            <span>{contest.position}</span>
                                        </div>
                                        <p>{contest.moreAbout}</p>
                                        <ul className="social-icons">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="divider"></div>

                <div className="row">
                    <div className="col-sm-4">
                        <h3 className="column-title">{this.state.abilityname}</h3>
                        {
                            this.state.ability.map(contest => {
                                return (
                                    <div key={contest._id.toString()}>
                                        <strong>{contest.title}</strong>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" data-width={contest.rate}>{contest.rate}%</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="col-sm-4">
                        <h3 className="column-title">{this.state.historyname}</h3>
                        <div role="tabpanel">
                            <ul className="nav main-tab nav-justified" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#tab1" role="tab" data-toggle="tab" aria-controls="tab1" aria-expanded="true">1390</a>
                                </li>
                                {
                                    this.state.history.map((contest, number) => {
                                        return (
                                            <li key={contest._id.toString()} role="presentation">
                                                <a href={"#tab" + number+2} role="tab" data-toggle="tab" aria-controls={"tab" + number+2} aria-expanded="false">{contest.year}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div id="tab-content" className="tab-content">
                                <div role="tabpanel" className="tab-pane fade active in" id="tab1" aria-labelledby="tab1">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه</p>
                                    <p>و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود</p>
                                </div>
                                {
                                    this.state.history.map((contest,number) => {
                                        return(
                                            <div key={contest._id.toString()} role="tabpanel" className="tab-pane fade" id={"tab" + number+2} aria-labelledby={"tab" + number+2}>
                                                <p>{contest.description}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <h3 className="column-title"></h3>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            روش سفارش طراحی
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.qa.map((contest,number)=> {
                                    if(number + 2 == 2){
                                        contest.idnumber = "Two"
                                    }else {
                                        contest.idnumber = "Three"                                        
                                    }
                                    console.log(contest.idnumber)
                                    return(
                                        <div key={contest._id.toString()} className="panel panel-default">
                                            <div className="panel-heading" role="tab" id={"heading" + contest.idnumber}>
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={"#collapse" + contest.idnumber} aria-expanded="false" aria-controls={"collapse" + contest.idnumber}>
                                                        {contest.title}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id={"collapse" + contest.idnumber} className="panel-collapse collapse" role="tabpanel" aria-labelledby={contest.idnumber}>
                                                <div className="panel-body">
                                                    {contest.description}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Meetteam;