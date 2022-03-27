import { useEffect, useState } from "react"
import { getGifs } from "../components/helpers/getGifs";


export const useFetchGifs = ( category ) => {

    // este estado carga por defecto
    const [state, setSatate] = useState({
        data: [],
        loading: true,
    });


    useEffect( ()=> {
        getGifs( category )
            .then( imgs => {

                setSatate({
                    data: imgs,
                    loading: false,
                });

            })
    }, [ category ])




    return state; // {data: [], loading: true }
}

