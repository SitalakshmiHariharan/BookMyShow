import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LatestMovies from './LatestMovies';
import UpcomingMovies from './UpcomingMovies';
import NearbyEvents from './NearbyEvents';
import MovieDetails from './MovieDetails';
import Booking from './Booking';

export default class Options extends Component {
    render() {
        return (   
               <BrowserRouter>
                <br /> <br /> <br /> <br /><br /> <br /> <br /> 
                    <div>
                        <header>                            
                            <h2><Link to="/latest">Latest Movies || </Link>
                            <Link to="/upcoming"> Upcoming Movies || </Link>
                            <Link to ="/events"> Nearby Events </Link></h2>
                        </header>
                        <Route path="/latest" component={LatestMovies}></Route>
                        <Route path="/upcoming" component={UpcomingMovies}></Route>
                        <Route path="/events" component={NearbyEvents}></Route>
                        <Route path="/details/:id" component={MovieDetails}></Route>
                        <Route path="/book/:name/:id" component={Booking}></Route>                        
                    </div>
                </BrowserRouter>
            
        )
    }
}
