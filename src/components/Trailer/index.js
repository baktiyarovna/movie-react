import React, {useState,useEffect} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import Slider from "react-slick";

const Trailer = ({moveId}) => {

    const [videos, setVideos] = useState([])

    const getVideos = async (id, key) => {
    try {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        const {data} = await url
        setVideos(data.results)
    }catch (e){
        console.log(e)
    }
    }
    console.log(videos)
    useEffect(() => {
        getVideos(moveId, APIKEY)
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div id="credits">
            <div className="container">
                <Slider {...settings}>

                    {
                        videos.map(el =>(
                            <div key={el.id} className="credits--card">
                                <iframe width="360" height="215" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </Slider>

            </div>
        </div>
    );
};

export default Trailer;