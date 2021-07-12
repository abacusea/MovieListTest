import React, { useState, useEffect } from "react";
import "./Detail.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Genre from '../Genre'



const Detail = () => {
    const [movie, setMovie] = useState('')
    let { slug } = useParams();

    useEffect(() => {
        fetchMovie()
    }, [])

    const fetchMovie = () => {
        var config = {
          method: 'get',
          url: `https://wookie.codesubmit.io/movies/${slug}`,
          headers: { 
            'Authorization': 'Bearer Wookie2021'
          }
        };
        
        axios(config)
        .then((res) => {
          setMovie(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
      }
  return (
    <>
    <h1>{movie.title}</h1>
    </>
  );
};

export default Detail;
