import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { loadedApp, loadingApp, getPokemons, getPokemonDetails} from '../redux/ducks/appDucks'

export default function MovesPage (props){

    const titulo = "Moves";
    const dispatch = useDispatch();
    let { id } = useParams();

    console.log("Moves parametros");
    console.log(useParams());

    useEffect(() =>{

        dispatch(getPokemonDetails(id));

    }, [dispatch]);

    console.log("Moves Page");

    const {app} = useSelector(state => state);
    const details = app.details;
    console.log(details);

    return (

        <div>
            <h1>
                Moves
            </h1>
            <body>
                <p>
                    <ul>
                    {
                        Array.isArray(details.moves) && details.moves.map((item, i) => {

                            return <li key={i}>Move: {item.move.name}
                            
                            {/* 
                            <ul>
                            {
                                item.version_group_details.map((it, index) => {

                                    return <li key={index}>Habilidad: {it}</li>
                                })
                            }
                            </ul> */}
                            
                            </li>
                        })
                    }
                    </ul>
                </p>
            </body>
        </div>

    );

}

