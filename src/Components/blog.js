import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../../config';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                posts : []
            }
        }
    };

    componentWillMount() {
        axios.get(`${config.getServerURL()}/api/blog`)
            .then(resp => {
                this.setState({
                    data : resp.data,
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
                        this.state.data.posts.map((posts,number)=>{
                            if(number == 0){
                                return(
                                    <div key={posts._id.toString()} className="col-sm-6">
                                        <div className="blog-post blog-large wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="0ms">
                                            <article>
                                                <header className="entry-header">
                                                    <div className="entry-thumbnail">
                                                        <img className="img-responsive" src={"images/blog/" + posts.imgUrl} alt="" />
                                                        <span className="post-format post-format-video"><i className={"fa fa-" + posts.icon}></i></span>
                                                    </div>
                                                    <div className="entry-date">1394 / 7 / 5</div>
                                                    <h2 className="entry-title"><a href="#">{posts.title}</a></h2>
                                                </header>
                
                                                <div className="entry-content">
                                                    <p>{posts.description}</p>
                                                    <a className="btn btn-primary" href="#">{posts.btnTitle}</a>
                                                </div>
                
                                                <footer className="entry-meta">
                                                    <span className="entry-author"><i className="fa fa-pencil"></i> <a href="#">{posts.author}</a></span>
                                                    <span className="entry-category"><i className="fa fa-folder-o"></i> <a href="#">{[posts.category]}</a></span>
                                                    <span className="entry-comments"><i className="fa fa-comments-o"></i> <a href="#">{posts.comments}</a></span>
                                                </footer>
                                            </article>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="col-sm-6">
                        {
                            this.state.data.posts.map((posts,number)=>{
                                if(number > 0){
                                    return(
                                        <div key={posts._id.toString()} className="blog-post blog-media wow fadeInRight" data-wow-duration="300ms" data-wow-delay="100ms">
                                            <article className="media clearfix">
                                                <div className="entry-thumbnail pull-left">
                                                    <img className="img-responsive" src={"images/blog/" + posts.imgUrl} alt="" />
                                                    <span className="post-format post-format-gallery"><i className={"fa fa-" + posts.icon}></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <header className="entry-header">
                                                        <div className="entry-date">1394 / 7 / 4</div>
                                                    <h2 className="entry-title"><a href="#">{posts.title}</a></h2>
                                                </header>
                
                                                <div className="entry-content">
                                                    <p>{posts.description}</p>
                                                    <a className="btn btn-primary" href="#">{posts.btnTitle}</a>
                                                </div>
                
                                                <footer className="entry-meta">
                                                    <span className="entry-author"><i className="fa fa-pencil"></i> <a href="#">{posts.author}</a></span>
                                                    <span className="entry-category"><i className="fa fa-folder-o"></i> <a href="#">{posts.category}</a></span>
                                                    <span className="entry-comments"><i className="fa fa-comments-o"></i> <a href="#">{posts.comments}</a></span>
                                                </footer>
                                                </div>
                                            </article>
                                        </div>
                                    )
                                }
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;