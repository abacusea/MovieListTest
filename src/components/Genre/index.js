import React, { useState, useEffect } from "react";
import "./Genre.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from 'react-router-dom';

const Genre = ({name}) => {
    const [movieList, setMovieList] = useState([])
    const [genre, setGenre] = useState([])

    useEffect(() => {
        fetchMovieList()
      }, [])
    
    useEffect(() => {
        console.log(genre)
    }, [genre])

      const fetchMovieList = () => {
        var config = {
          method: 'get',
          url: 'https://wookie.codesubmit.io/movies',
          headers: { 
            'Authorization': 'Bearer Wookie2021'
          }
        };
        
        axios(config)
        .then((res) => {
          const movieData = res.data.movies
          setMovieList(movieData)
          setGenre(filterGenre(movieData))
        })
        .catch((err) => {
          console.log(err);
        });
      }

      const filterGenre = (arr) => {
        return arr.filter((movieArr) => movieArr.genres.includes(name)? movieArr: "");
      }

    //   const arrByGenre = () =>{
    //     const data = filterGenre();
    //     setGenre(data);
    //     console.log(data)
    //   }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        arrows: false
    };
    const genreList = () => (
        <div className="row">
            <Slider {...settings}>
                {genre.map((data, idx) => {
                    return(
                        <>
                            <Link to={'/movie/' + data.slug}>
                                <div className="box" key={idx}>
                                    <img src={data.poster} alt={data.title} />
                                </div>
                            </Link>
                        </>
                       
                    )
                })}
               
            </Slider>
            
        </div>
    )
  return (
    <>
        <div className="container">
            <h3>{name}</h3>
            {genreList()}
        </div>
    </>
  );
};

export default Genre;
