import {useEffect, useState} from "react";
import {getGifs} from "../services/gifService";


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( async () => {
        const imgs = await getGifs(category)
        setState( {
            data: imgs,
            loading: false
        })
    },[category]);

    return state
};
