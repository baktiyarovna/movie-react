import React, {useEffect, useState} from 'react';
import {APIKEY} from "../../ApiKey/ApiKey";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const getPopular = async (key) => {
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        const {data} = await response
        setPopular(data.results)
    }

    useEffect(() => {
        getPopular(APIKEY)
    }, [])

    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {popular.map(el => (
                       <MovieCard key={el.id} el={el}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1