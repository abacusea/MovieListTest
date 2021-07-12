import React, { useState, useEffect } from "react";
import "./Genre.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from 'react-router-dom';
import { getMovies } from '../../actions';

const Genre = ({name}) => {
    const [genre, setGenre] = useState([])

    useEffect(() => {
        fetchMovieList()
      }, [])


      const fetchMovieList = () => {        
        axios(getMovies)
        .then((res) => {
          const movieData = res.data.movies;
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
