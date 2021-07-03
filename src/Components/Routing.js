import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import MovieSlider from './MovieSlider';
import RecomMovies from './RecomMovies';
import Options from './Options';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>    
                    <Options />             
                    <MovieSlider />  
                    <RecomMovies />
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;

