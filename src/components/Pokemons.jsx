import React from 'react'
import {Link} from 'react-router-dom'

export default function Pokemons(props){

    const {data} = props;

    return (
        <div>
            <ul>
                {
                data.map((item, i) => {
                    let id = item.url.substring(34).replace('/', '') ;
                    let url = '/detail/' + id;
                    let urlMoves = '/moves/' + id;
                    console.log(id);

                    return <li key={id}>{item.name} - <Link to={url}>Detalle</Link> - <Link to={urlMoves}>Moves</Link></li>
                })
                }
            </ul>
        </div>
    );

}