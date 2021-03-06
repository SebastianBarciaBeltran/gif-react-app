import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data   : [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    

    }, [category]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setimages( imgs ) )
    // }, [ category ]);

    return state; // { data: [], loading: true }

}