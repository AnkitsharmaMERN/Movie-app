import React from "react";
import axios from "axios";
import { useState } from "react";
import '../AddMovie/AddMovie.css'




function AddMovie() {

    const [Movies, SetMovies] = useState({
        title: "", uid: "", genre: "", Type: "", category: "", language: "", Stars_desc: "", Story_desc: "",
        Download_link_1: "", Download_link_2: "", Download_link_3: ""
    })
    console.log(Movies)

    const [Image, SetImage] = useState({})
    console.log(Image)
    // This function is for get the value from reactUI 
    const handelgetdata = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetMovies({ ...Movies, [name]: value })
        SetImage(event.target.files[0])
    }
    // This function is for post the value in server
    const postdata = async (e) => {
        e.preventDefault();
        try {
            console.log(Movies.title)
            // console.log(Image.length)
            const formData = new FormData()
            formData.append('title', Movies.title)
            formData.append('uid', Movies.uid)
            formData.append('genre', Movies.genre)
            formData.append('Type', Movies.Type)
            formData.append('category', Movies.category)
            formData.append('language', Movies.language)
            formData.append('Stars_desc', Movies.Stars_desc)
            formData.append('Story_desc', Movies.Story_desc)
            formData.append('Download_link_1', Movies.Download_link_1)
            formData.append('Download_link_2', Movies.Download_link_2)
            formData.append('Download_link_3', Movies.Download_link_3)
            formData.append('Image', Image)
            // for (let i = 0; i < Image.length; i++) {
            //     formData.append('Image', Image)
            // }
            console.log(...formData)
            const config = { headers: { 'Content-Type': 'multipart/form-data' } }
            const res = await axios.post("http://localhost:27017/api/Movie/", formData, { withCredentials: true }, config)
            console.log(res)
            if (res.status === 203) {
                alert("you are not authorized")
                // Navigate("/*")
            }
            else {
                SetMovies({
                    title: "", uid: "", genre: "", category: "", Type: "", language: "", Stars_desc: "", Story_desc: "",
                    Download_link_1: "", Download_link_2: "", Download_link_3: ""
                })
                SetImage()
            }
        } catch (error) {
            console.log(error)

        }

    }



    return (
        <div className="container AddMoviemaincontainer">
            <div className="AddMovieproduct mt-2">
                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Name" name="title" value={Movies.title} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Uid" name="uid" value={Movies.uid} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >

                    <input type="text" className="AddMovieinput" placeholder="Movie Genre" name="genre" value={Movies.genre} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Category" name="category" value={Movies.category} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Type" name="Type" value={Movies.Type} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie language" name="language" value={Movies.language} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Stars Details" name="Stars_desc" value={Movies.Stars_desc} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Story" name="Story_desc" value={Movies.Story_desc} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Download link" name="Download_link_1" value={Movies.Download_link_1} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Download link" name="Download_link_2" value={Movies.Download_link_2} onChange={handelgetdata} />
                </div>

                <div className="row" style={{ alignContent: "center" }} >
                    <input type="text" className="AddMovieinput" placeholder="Movie Download link" name="Download_link_3" value={Movies.Download_link_3} onChange={handelgetdata} />
                </div>


                <div className="row" style={{ alignContent: "center" }} >
                <input type="file" className="AddMovieinput" placeholder="Movie Image " name="Image" onChange={handelgetdata} />
                </div>

                <button type="button" className="btn btn-success my-2 AddMoviebtn" onClick={postdata}>ADD movie</button>
            </div>
            <div className="AddMovieImagecontainer">
                <img className="AddMovieImage" src='../pictures/Movie.jpg' alt='' />
            </div>
        </div>

    )
}

export default AddMovie