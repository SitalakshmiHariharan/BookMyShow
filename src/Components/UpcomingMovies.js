
import React, { Component } from "react";
import * as actions from '../Actions';
import {connect} from  'react-redux';
import '../Styles/upcoming.css';

class UpcomingMovies extends Component {

  componentDidMount(){
    this.props.upcomingMovies();
  }

  renderList = (upcoming) => {
    if(upcoming){
        return upcoming.map((data)=>{
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
                              {data.date}
                          </p>                         
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
          <br/><br/>
          <center><h1> UPCOMING MOVIES</h1></center>  
            <div className="container-fluid d-flex justify-content-center">                           
              <div className="row">                    
                  {this.renderList(this.props.upcoming)}                                         
              </div>
            </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    upcoming:state.UpcomingReducer
  }
}

export default connect(mapStateToProps,actions)(UpcomingMovies);