import React from 'react'
import Postlist from '../Mainsection/Postlist/Postlist'

const BL = () => {
    return (
        <div>
            <div class="page-title wb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2><i class="fa fa-leaf bg-green"></i> Category by: German Bundesliga</h2>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Blog</a></li>
                                <li class="breadcrumb-item active">German Bundesliga</li>
                            </ol>
                        </div>                    
                    </div>
                </div>
            </div>

            <Postlist/>

        </div>
    )
}
export default BL
