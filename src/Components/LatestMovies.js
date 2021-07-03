import React, { Component } from "react";
import * as actions from '../Actions';
import {connect} from  'react-redux';
import '../Styles/upcoming.css';


class LatestMovies extends Component {

  componentDidMount(){
    this.props.latestMovies();
  }

  renderList = (latest) => {
    if(latest){
        return latest.map((data)=>{        
            return(
                <>                                     
                <div className="col-md-4">
                  <div className='card text-center'>
                      <div className='overflow'>
                          <img src={data.imageUrl} alt='Movie Name' width='150px' height='150px'/>
                      </div>
                      <div className="card-body text-dark">
                          <h4 className="card-title">{data.name}</h4>
                          <p className="card-text text-secondary">
                              {data.type}
                          </p>
                          <p className="card-text text-secondary">
                              {data.rate}
                          </p>                          
                          <a href={`/details/${data.id}/`} class="btn btn-outline-info"> More Details </a>  
                          <a href={`/book/${data.name}/${data.id}/`} class="btn btn-outline-info"> Book Now </a>                       
                      </div>
                  </div>
                </div>               
                </>
            )
        })
    }
}

  render() {
    return (
      <div>
          <center><h1> LATEST MOVIES</h1></center>  
            <div className="container-fluid d-flex justify-content-center"> 
                                       
                <div className="row">                    
                    {this.renderList(this.props.latest)}                                         
                </div>
             
            </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    latest:state.LatestReducer
  }
}

export default connect(mapStateToProps,actions)(LatestMovies);