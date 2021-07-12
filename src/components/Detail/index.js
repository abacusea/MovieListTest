import React, { useState, useEffect } from "react";
import "./Detail.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import moment from 'moment';
import { getMovieById, Api } from '../../actions';


const Detail = () => {
    const [movie, setMovie] = useState('')
    let { slug } = useParams();

    useEffect(() => {
        fetchMovie()
    }, [])

    const fetchMovie = () => {
        var config = {
          ...getMovieById,
          url: `${Api}/${slug}`
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
    <div className="detail_container">
        <div className="left_pane">
            <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="right_pane">
            <div className="top_block">
                <div className="title_wrap">
                    <h4> {movie.title}</h4>
                </div>
                <div className="rating_wrap">
                    <Rating
                        name="simple-controlled"
                        value={movie.imdb_rating/2}
                    />
                </div>
            </div>
            <div className="detail_wrap">
                <h5>
                    {moment(movie.released_on).format('YYYY')} |
                    {` ${movie.length}`} |
                    {` ${movie.director}`}
                </h5>
                <h5>cast: {movie.cast? movie.cast.toString().replace(/,/g, ", "): ""}</h5>
            </div>
            <div className="description_wrap">
                <p>
                    {movie.overview}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
    </div>
    </>
  );
};

export default Detail;
