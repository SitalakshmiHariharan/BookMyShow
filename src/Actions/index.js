import axios from 'axios';
const url = "http://localhost:6700";

export function sliderData(){
    console.log("Inside the slider action")
    const output = fetch(`${url}/movies`,{method:'GET'})
    .then((res) => res.json())    

    return{
        type:'GET_SLIDER_DATA',
        payload: output
    }
}

/*export function sliderData(){
    console.log("Inside the slider action")
    axios.get(`http://localhost:6700/movies`)
    .then(res =>{
        const output = res.json();
    })
    return{
        type:'GET_SLIDER_DATA',
        payload: output
    }
}*/

export function recomMovies(){
    console.log("Inside the Recommended Movies action")
    const output = fetch(`${url}/recommended`,{method:'GET'})
    .then((res) => res.json())    

    return{
        type:'GET_RECOM_MOVIES',
        payload: output
    }
}

export function latestMovies(){
    console.log("Inside the Latest Movies action")
    const output = fetch(`${url}/latest`,{method:'GET'})
    .then((res) => res.json())    

    return{
        type:'GET_LATEST_MOVIES',
        payload: output
    }
}

export function upcomingMovies(){
    console.log("Inside the Upcoming Movies action")
    const output = fetch(`${url}/upcomingMovies`,{method:'GET'})
    .then((res) => res.json())    

    return{
        type:'GET_UPCOMING_MOVIES',
        payload: output
    }
}

export function nearbyEvents(){
    console.log("Inside the Nearby Events action")
    const output = fetch(`${url}/events`,{method:'GET'})
    .then((res) => res.json())    

    return{
        type:'GET_NEARBY_EVENTS',
        payload: output
    }
}




