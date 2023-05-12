import React, {useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Actor = () => {

    const [actor, setActor] = useState([])
    const {actorId} = useParams()




    return (
        <div>
            
        </div>
    );
};

export default Actor;