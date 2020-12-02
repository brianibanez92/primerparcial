import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { loadedApp, loadingApp, getPokemons, getPokemonDetails} from '../redux/ducks/appDucks'

export default function DetailPage (props){

    const titulo = "Detalles";
    const dispatch = useDispatch();
    let { id } = useParams();

    console.log("Detalles parametros");
    console.log(useParams());

    useEffect(() =>{

        dispatch(getPokemonDetails(id));

    }, [dispatch]);

    console.log("List Page");

    const {app} = useSelector(state => state);
    const details = app.details;
    console.log(details);

    return (

        <div>
            <h1>
                Detalles
            </h1>
            <body>
                <p><label>Name: {details.name}</label></p>
                <p><label>Id: {details.id}</label></p>
                <p>
                    <ul>
                    {
                        Array.isArray(details.abilities) && details.abilities.map((item, i) => {

                        return <li key={i}>Habilidad: {item.ability.name} - Alcance: {item.slot}</li>
                        })
                    }
                    </ul>
                </p>
                <p>
                    <img src={details.sprites?.back_female} alt="Logo" />
                    <img src={details.sprites?.back_shiny} alt="Logo" />
                    <img src={details.sprites?.back_shiny_female} alt="Logo" />
                    <img src={details.sprites?.front_default} alt="Logo" />
                    <img src={details.sprites?.front_female} alt="Logo" />
                    <img src={details.sprites?.front_shiny} alt="Logo" />
                    <img src={details.sprites?.front_shiny_female} alt="Logo" />
                </p>
            </body>
        </div>

    );

}

