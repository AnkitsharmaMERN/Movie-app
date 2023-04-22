import React, { useEffect, useState } from "react";
// import "../Card/Card";
import { productDetailsAction } from "../../../react-redux/action"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import "./MoviePage.css";
import FourZeroFour from "../FourZeroFour";
import { AddFavoriteMovie } from "../../../react-redux/userAction";

function MoviePage() {

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetails
    // here get the value of product 
    const { screenshots } = product
    // console.log(product.screenshots)
    // console.log(screenshots)

    const posteddata = useSelector(state => state.moviesfavorites)
    const { favproduct } = posteddata

    // console.log(favproduct)



    const { id } = useParams();


    useEffect(() => {
        console.log(id)
        dispatch(productDetailsAction(id))
    }, [dispatch, id,])
    // const getsinglemovie = async() => {
    //     try{
    //         const res = await axios.get(`http://localhost:27017/api/Movie/${id}`)
    //         console.log(res.data)
    //         SetMovies(res.data)
    //     }
    //     catch (error){
    //         console.log(error)
    //     }
    // }

    const [msg, setmsg] = useState({
        message: 'posted data'
    })

    const postdata = () => {
        try {
            if (id) {
                console.log(id)
                dispatch(AddFavoriteMovie(id, msg))
            } else {
                alert("please select your product")
            }
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <>
            {
                loading ? (<h1>loading...</h1>) : error ? (<FourZeroFour />) :
                    (<>
                        <div className="container main_container">
                            <div className="left-container button-class">
                                <h1 className="MovieDetailsheading"> {product.title} </h1>
                                <div className="main-body">
                                    <div>
                                        <img alt="pic" loading="lazy" className="MovieDetailsimage" src={`http://localhost:27017/movieImg/${product.thumbnail_pic}`}></img>
                                    </div>
                                </div>
                                <div className="movie_name">
                                    <div className="button-class">
                                        <p className="MovieDetailsheading">language: {product.language} </p>
                                        <p className="MovieDetailsheading">Story: {product.Story_desc}</p>
                                        <p className="MovieDetailsheading">Stars: {product.Stars_desc} </p>
                                        <p className="MovieDetailsheading">
                                            Rating:
                                            Quality:
                                            Audio:
                                        </p>
                                        <h1 className="MovieDetailsheading"> Screenshots of Movie</h1>
                                        <div className="MoviesScreenshotdiv">
                                            {
                                                screenshots && screenshots.map((schreenshots) => {
                                                    // console.log(schreenshots.filename)
                                                    return (
                                                        <p><img alt="pic" loading="lazy" className="screenshotImage" src={`http://localhost:27017/movieImg/screenshot/${schreenshots.filename}`} width="650" height="560"></img> </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-container1 button-class">
                                <h1 className="Moviescategory_heading">Categories</h1>
            
                                <ul className="Movieslist-group">
                                    <li className="Movieslist-item"> Action </li>
                                    <li className="Movieslist-item"> Bollywood </li>
                                    <li className="Movieslist-item"> Hollywood </li>
                                    <li className="Movieslist-item"> Romance </li>
                                    <li className="Movieslist-item"> Action </li>
                                    <li className="Movieslist-item"> Action </li>
                                    <li className="Movieslist-item"> Action </li>
                                </ul>
                                
                                <button type="button" className="btn btn-outline-secondary " onClick={postdata}>Add to favorite</button>
                                <p className="MovieDetailsheading">
                                    Movie content Related to genre
                                </p>
                                <div className="container">
                                    <h1 className="MovieDetailsheading"> Download Links </h1><br />
                                    <a href={product.Download_link_1} className=" Downloaditem btn btn-outline-secondary" >Download link 1</a><br />
                                    <a href={product.Download_link_2} className=" Downloaditem btn btn-outline-secondary" >Download link 2</a><br />
                                    <a href={product.Download_link_3} className=" Downloaditem btn btn-outline-secondary" >Download link 3</a><br />
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </>
    )
}

export default MoviePage 