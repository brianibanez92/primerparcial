import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { loadedApp, loadingApp, getPokemons} from '../redux/ducks/appDucks'
import Pokemons from '../components/Pokemons'

function ListPage() {    

    const dispatch = useDispatch();

    useEffect(() =>{

        dispatch(getPokemons());

    }, [dispatch]);

    const {app} = useSelector(state => state);
    console.log("List Page");
    console.log(app.details);

    return  <div>
                <h1>List</h1>
                <Pokemons data={app.data} ></Pokemons>
            </div>;  

}

export default ListPage;