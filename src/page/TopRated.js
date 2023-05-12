import React from "react";
import {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import MovieCard from "../MovieCard/MovieCard";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const getTopRatedt = async (key) => {
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
        const {data} = await response
        setTopRated(data.results)
    }

    useEffect(() => {
        getTopRatedt(APIKEY)
    }, [])

    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {topRated.map(el => (
                        <MovieCard key={el.id} el={el}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;