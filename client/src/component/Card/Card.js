import React from 'react'
import { Link } from 'react-router-dom';
import "../Pages/MovieDetails/MoviePage";
import "../Card/card.css";

function Card({ product }) {
    // console.log(product.thumbnail_pic)
    return (
        <div className="col-md-4 card_container" key={product._id} style={{ padding: "9px 5px", width: "20rem", height: "23rem" }}>
            <img src={`http://localhost:27017/movieImg/${product.thumbnail_pic}`} className="card-img-top" style={{ width: "19rem", height: "10rem" }} alt="pic" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.Stars_desc}</p>
                <p className="card-text">{product.Story_desc}</p>
                <Link to={`/moviepage/${product._id}`} className="btn btn-primary cardbtn"> Movie Details</Link>
            </div>
        </div>
    )
}

export default Card



