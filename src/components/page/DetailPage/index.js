import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../../ApiKey/ApiKey";
import Credits from "../../Credits";
import Trailer from "../../Trailer";

const DetailPage = () => {
    const [detail, setDetail] = useState([])
    const {movieId} = useParams()

    const getDetail = async (id, key) => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        const {data} = await response
        setDetail(data)
    }


    useEffect(() => {
        getDetail(movieId, APIKEY)
    }, [])
    const {title, poster_path, overview, backdrop_path, genres, release_date, runtime, vote_average} = detail
    console.log(detail.title)
    return (
        <>
            <div id="detail" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}") no-repeat left/cover`
            }}>
                <div className="container">
                    <div className="detail">
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} width={300}
                             alt=""/>
                        <div className="detail--items">
                            <h1>{title}</h1>
                            <div className="detail--items-genres">
                                {genres?. map(el => <p key={el.id}>{el.name}</p>)}
                            </div>
                            <h3>{release_date}</h3>
                            <h3> {Math.floor(runtime / 60)}<small>h</small>{runtime % 60} <smal>min</smal></h3>
                            <p>{overview}</p>
                            <p>{Math.floor(vote_average * 10)}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <Credits movieId={movieId}/>
            <Trailer moveId={movieId}/>
        </>
    );
};

export default DetailPage;