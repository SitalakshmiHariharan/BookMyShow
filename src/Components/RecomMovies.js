import React, { Component } from 'react';
import * as actions from '../Actions';
import {connect} from  'react-redux';
import '../Styles/recommovies.css';

class RecomMovies extends Component {

    componentDidMount(){
        this.props.recomMovies()
    }

    renderList = (recomMovie) => {
        if(recomMovie){
            return recomMovie.map((data) =>{
                return(
                    <>
                    <div className="col-md-4">
                        <div className='card text-center'>
                            <div className='overflow'>
                                <img src={data.imageUrl} alt='Movie Name' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">{data.name}</h4>
                                <p className="card-text text-secondary">
                                    {data.desc}
                                </p>
                                <a href={`/book/${data.name}/${data._id}/`} className="btn btn-outline-info"> Book Now </a>
                            </div>
                        </div>
                     </div>
                    </>
                );
            })
        }
    }

    render() {
        return (
            <div>
                <hr />
                <center><h1> RECOMMENDED MOVIES</h1></center>  
                <div className="container-fluid d-flex justify-content-center">                           
                <div className="row">                    
                        {this.renderList(this.props.recomMovie)}                                         
                </div>
                </div>
            </div>
            

        )
    }
}

function mapStateToProps(state){    
    return{
        recomMovie:state.RecomReducer
      }
    }


export default connect (mapStateToProps,actions)(RecomMovies);




