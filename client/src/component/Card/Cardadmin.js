import React from 'react'
import { Link } from 'react-router-dom';
import "../Admin_page/MovieAccess/updateMovie/EditMovies"
import "./Cardadmin.css";

function Cardadmin({product}) {
    return (
        <div className='col-md-4 card_container' key={product._id} style={{padding:"9px 5px",width:"20rem",height: "24rem"}}>
                <img src={`http://localhost:27017/movieImg/${product.thumbnail_pic}`} className="card-img-top" style={{width:"19rem", height: "10rem"}} alt="pic"/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.Stars_desc}</p>
                        <p className="card-text">{product.Story_desc}</p>
                        <div className='btnbody'>
                        {/* <Link to={`/dashboard/deletemovie/${product._id}`} className="btn btn-primary card-ad"> Delete Movies </Link> */}
                        <Link to={`/dashboard/editmovies/${product._id}`} className="btn btn-primary card-ad">Edit Movie </Link>
                        </div>
                </div>
            </div>
    )
}

export default Cardadmin



