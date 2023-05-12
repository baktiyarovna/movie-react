import React from 'react';
import {Link, NavLink} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
            <div className='movies-card'>
                <Link to={`/movies/detail-page/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                </Link>
                <h3>{el.title}</h3>
            </div>

    );
};

export default MovieCard;