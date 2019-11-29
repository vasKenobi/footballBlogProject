import React from 'react'
import {Link} from 'react-router-dom'
import '../../../../css/style.css'

const PostSharing = () => {
    return (
                            <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><a class="fb-button btn btn-primary btnSocial"><Link to="/"><i class="fa fa-facebook btnSocial"></i> <span class="down-mobile btnSocial">Share on Facebook</span></Link></a></li>
                                        <li><a class="tw-button btn btn-primary btnSocial"><Link to="/"><i class="fa fa-twitter btnSocial"></i> <span class="down-mobile btnSocial">Tweet on Twitter</span></Link></a></li>
                                    </ul>
                                </div>
    )
}
export default PostSharing
