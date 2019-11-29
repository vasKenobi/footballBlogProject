import React from 'react'
import {Link} from 'react-router-dom'

const Comments = () => {
    return (
                        <div class="custombox clearfix">
                                <h4 class="small-title">3 Comments</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="comments-list">
                                            <div class="media">
                                                <a class="media-left">
                                                    <Link to="/">
                                                        <img src="images/visitor.png" alt="" class="rounded-circle"/>
                                                    </Link>
                                                </a>
                                                <div class="media-body">
                                                    <h4 class="media-heading user_name">Antuan Lavuaie <small>6 days ago</small></h4>
                                                    <p>What a great, great, great article. Thank you very much Gzhegozh.</p>
                                                    <a class="btn btn-primary btn-sm"><Link to="/">Reply</Link></a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <a class="media-left">
                                                    <Link to="/">
                                                        <img src="images/author.png" alt="" class="rounded-circle"/>
                                                    </Link>
                                                </a>
                                                <div class="media-body">

                                                    <h4 class="media-heading user_name">Abigail Mitchell <small>4 days ago</small></h4>

                                                    <p>So, who has better chances to win the game? Your final forecast?</p>

                                                    <a class="btn btn-primary btn-sm"><Link to="/">Reply</Link></a>
                                                </div>
                                            </div>
                                            <div class="media last-child">
                                                <a class="media-left">
                                                    <Link to="/">
                                                        <img src="images/visitor.png" alt="" class="rounded-circle"/>
                                                    </Link>
                                                </a>
                                                <div class="media-body">

                                                    <h4 class="media-heading user_name">Marie Winston <small>2 days ago</small></h4>
                                                    <p>I believ that linings probably mau differ. Let's wait for the game.</p>

                                                    <a class="btn btn-primary btn-sm"><Link to="/">Reply</Link></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}
export default Comments
