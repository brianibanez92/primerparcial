export function getData(){

    return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })

}

export function getDetails(id){

    console.log("getDetails");
    console.log(id);

    let url = 'https://pokeapi.co/api/v2/pokemon/' + id;
    console.log(url);

    return fetch(url)
    .then((response) => {
        return response.json();
    })

}