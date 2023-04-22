import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AdminProductRemove, AdminProductupdate } from "../../../../react-redux/action"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FourZeroFour from '../../../Pages/FourZeroFour';
import './EditMovies.css'
import axios from 'axios';


function EditMovies() {

  const dispatch = useDispatch();
  // const productDetails = useSelector(state => state.productDetails)
  // const { loading, product, error } = productDetails
  const updateproductdetails = useSelector(state => state.Updateproduct)
  const { updateproduct } = updateproductdetails

  const Navigate = useNavigate();

  const { id } = useParams();

  // if(updateproduct.msg){
  //   alert(updateproduct.msg)
  //   Navigate('/dashboard/getmovies')
  // }
  // console.log(updateproduct.msg)

  useEffect(() => {

    getsingledata(id);

  }, [id, updateproduct])

  const [Movies, SetMovies] = useState({
    title: "", uid: "", genre: "", Type: "", category: "", language: "", Stars_desc: "", Story_desc: "",
    Download_link_1: "", Download_link_2: "", Download_link_3: ""
  })


  const getsingledata = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:27017/api/Movie/${id}`, { withCredentials: true })
      console.log(data)
      console.log(data.title)
      SetMovies({
        title: data.title, genre: data.genre, uid: data.uid, thumbnail_pic: data.thumbnail_pic, Type: data.Type, category: data.category,
        language: data.language, Stars_desc: data.Stars_desc, Story_desc: data.Story_desc,
        Download_link_1: data.Download_link_1, Download_link_2: data.Download_link_2, Download_link_3: data.Download_link_3
      })
      setgetscreenshot(data.screenshots)
    }
    catch (error) {
      SetMovies(error)
      console.log(error)
      console.log(error.status)
    }
  }

  const [screenshots, Setscreenshots] = useState({})
  const [getscreenshot, setgetscreenshot] = useState()
  // console.log(screenshots)
  console.log(Movies.title)
  console.log(getscreenshot)
  const handlechange = (e) => {
    const name = e.target.name
    const value = e.target.value
    SetMovies({ ...Movies, [name]: value })
    Setscreenshots(e.target.files)
  }
  // console.log(Movies.genre)
  // console.log(Movies.title)

  const postdata = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append('title', Movies.title)
      formData.append('uid', Movies.uid)
      formData.append('genre', Movies.genre)
      formData.append('Type', Movies.Type)
      formData.append('category', Movies.category)
      formData.append('language', Movies.language)
      formData.append('Stars_desc', Movies.Stars_desc)
      formData.append('Story_desc', Movies.Story_desc)
      formData.append('Download_link1', Movies.Download_link_1)
      formData.append('Download_link2', Movies.Download_link_2)
      formData.append('Download_link3', Movies.Download_link_3)
      for (let i = 0; i < screenshots.length; i++) {
        formData.append('screenshots', screenshots[i])
      }
      console.log(...formData)
      dispatch(AdminProductupdate(id, formData))
    } catch (error) {
      console.log(error)
    }
  }


  const Removefunction = (e) => {
    e.preventDefault();
    if (Movies) {
      console.log(Movies)
      console.log(id)
      dispatch(AdminProductRemove(id))
    }

  }

  return (
    <>
      {/* {Movies.error===undefined ? (<FourZeroFour />) : */}
      {/* (
          <> */}
      <div className="container EditMain_container">
        {/* {console.log(Product)} */}
        <div className="left-container">
          <div className="container button-class">
            <h1 className='EditMovieHeading'> {Movies.title} </h1>
            <div className="main-body">
              <p className='EditMovieHeading'> {Movies.Stars_desc} </p>
              <p>
                <img alt="pic" loading="lazy" className="EditMovieImage" src={`http://localhost:27017/movieImg/${Movies.thumbnail_pic}`} width="700" height="700"></img>
              </p>
              <div className="row EditMovieHeading">
                Movie Poster:<input type="File" className="EditMovieInput" placeholder="Paste your image link of movies" name="thumbnail_pic" onChange={handlechange} />
              </div>
              <br />
            </div>
            {/* <div className="container movie_name">
              <div className="row" style={{ alignContent: "center" }} >
              </div>
            </div> */}

            <div className='container'>
              <h1 className='EditMovieHeading'> Screenshot of Movies </h1>

              {/* This is the map function to get the value from array phase stored in backend  */}
              {getscreenshot && getscreenshot.map((value) => {
                console.log(value.filename)
                return (
                  <img alt="pic" loading="lazy" className="Screen-image" src={`http://localhost:27017/movieImg/screenshot/${value.filename}`} width="650" height="560"></img>
                  )
                })
              }

              {/* ================================================================================================================================================================= */}

              <div className="row EditMovieHeading" style={{ alignContent: "center" }} >
                Screenshots: <input type='file' multiple className='EditMovieInput' placeholder="upload screenshot image of movie" name="screenshots" onChange={handlechange} />
              </div>
              <br />
            </div>
          </div>
              <button type="button" className="btn btn-success my-2 EditMoviesBtn" onClick={Removefunction}>Remove Movie</button>

        </div>

        <div className="right-container button-class">
          <div className="category_container">
            <h1 className="EditCategory_heading">Edit Details</h1>
            <h3 className='EditDetailsHeading'>Title :  {Movies.title}</h3>
            <div className="container button-class">
              <div className="row" style={{ alignContent: "center" }} >
                <input type="text" className='EditMovieInput' placeholder="Enter the movies Name with title" name="title" value={Movies.title} onChange={handlechange} />
              </div>

              <h3 className='EditDetailsHeading'>Genre : {Movies.genre}</h3>
              <div className="row" style={{ alignContent: "center" }} >
              <input type="text" className='EditMovieInput' placeholder="Enter your Genre  of movies" name="genre" value={Movies.genre} onChange={handlechange} />
              </div>
            
              <h3 className='EditDetailsHeading'>Category : {Movies.category}</h3>
              <div className="row" style={{ alignContent: "center" }} >
              <input type="text" className='EditMovieInput' placeholder="Enter your category  of movies" name="category" value={Movies.category} onChange={handlechange} />
              </div>
            
              <h3 className='EditDetailsHeading'>Type : {Movies.Type}</h3>
              <div className="row" style={{ alignContent: "center" }} >
              <input type="text" className='EditMovieInput' placeholder="Enter your Type  of movies" name="Type" value={Movies.Type} onChange={handlechange} />
              </div>
              <br />
              <h3 className='EditDetailsHeading'>Language : {Movies.language}</h3>
              <div className="row" style={{ alignContent: "center" }} >
              <input type="text" className='EditMovieInput' placeholder="Enter your Genre  of movies" name="language" value={Movies.language} onChange={handlechange} />
              </div>
              <br />
              <h3 className='EditDetailsHeading'>Stars desc : {Movies.Stars_desc}</h3>
              <div className="row" style={{ alignContent: "center" }} >
              <input type="text" className='EditMovieInput' placeholder="Enter your Desc/name of stars" name="Stars_desc" value={Movies.Stars_desc} onChange={handlechange} />
              </div>
              <br />
              <h3 className='EditDetailsHeading'>Story desc : {Movies.Story_desc}</h3>
              <div className="row" style={{ alignContent: "center" }} >
              <input type="text" className='EditMovieInput' placeholder="Enter story related of movie" name="Story_desc" value={Movies.Story_desc} onChange={handlechange} />
              </div>
              <br />
            </div>


            <div className="container button-class">
              <h1 className="EditDetailsHeading button-class"> Edit Download link </h1>
              <a href={Movies.Download_link_1} className=" item btn btn-outline-secondary" >Download link 1</a><br />
              <div className="row" style={{ alignContent: "center" }} >
                <input type="text" className='EditMovieInput' placeholder="Enter your first Download link of movie" name="Download_link_1" value={Movies.Download_link_1} onChange={handlechange} />
              </div>
              <br />
              <a href={Movies.Download_link_2} className=" item btn btn-outline-secondary" >Download link 2</a><br />
              <div className="row" style={{ alignContent: "center" }} >
                <input type="text" className='EditMovieInput' placeholder="Enter your second Download link of movie" name="Download_link_2" value={Movies.Download_link_2} onChange={handlechange} />
              </div>
              <br />
              <a href={Movies.Download_link_3} className=" item btn btn-outline-secondary" >Download link 3</a><br />
              <div className="row" style={{ alignContent: "center" }} >
                <input type="text" className='EditMovieInput' placeholder="Enter your third Download link of movie" name="Download_link_3" value={Movies.Download_link_3} onChange={handlechange} />
              </div>
      
              <h1 className="EditDetailsHeading button-class">Movies No</h1>
              <div className="row" style={{ alignContent: "center" }} >
                <input type="text" className='EditMovieInput' placeholder="Enter the movies Name with title" name="uid" value={Movies.uid} onChange={handlechange} />
              </div>
            </div>

            <div className="container">
              <button type="button" className="btn btn-success my-2 EditMoviesBtn" onClick={postdata}>Update Movie</button>
            </div>
          </div>
        </div>
      </div>
    </>)
}
// </>
// )
// }

export default EditMovies