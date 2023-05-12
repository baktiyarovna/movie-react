import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/ApiKey";
import Slider from "react-slick"
import Profile from "../../img/Prodile.png"

const Credits = ({movieId}) => {

    const [actors, setActors] = useState([])

    const getCredits = async (id, key) =>{
     try{
         const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
         const {data} = await response
         setActors(data.cast)
     }catch(e){
         console.log(e)
     }
    }

useEffect(() => {
    getCredits(movieId,APIKEY)
},[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };


    return (
        <div id="credits">
            <div className="container">
          <Slider {...settings}>
              {
                  actors.map(el =>(
                      <div key={el.id} className="credits--card">
                          {
                              el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                  :
                                  <img src={Profile} width={160} height={180} alt=""/>

                          }
                          <h4>{el.name}</h4>
                          <p>{el.character}</p>
                      </div>
                  ))
              }
          </Slider>

            </div>
        </div>
    );
};

export default Credits;