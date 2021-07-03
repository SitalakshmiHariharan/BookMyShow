import React,{ Component } from 'react'
import * as actions from '../Actions';
import {connect} from  'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class MovieDetails extends Component {

    componentDidMount(){
        this.props.latestMovies();
    }

    renderList = (details) => {
        const {params} = this.props.match
        //console.log("My Param Value: ",params.id)
        if(details){
            return details.map((data) => { 
                if(data.id == params.id){       
                return(
                    <>                                     
                    <Card style={{ width: '25rem' }}>                        
                        <Card.Body>
                            <Card.Title><center>{data.name}</center></Card.Title>
                            <Card.Img variant="top" src={data.imageUrl} height="60px" width="25px" />
                            <Card.Text>                            
                            <p><b>GENRE:</b> {data.type}</p>
                            <p><b>RATING:</b> {data.rate}</p>
                            <p><b>SYNOPSIS:</b> {data.desc}</p>
                            </Card.Text>
                            <center><a href="/latest" class="btn btn-outline-info"> Back </a></center>
                        </Card.Body>
                    </Card>                  
                    </>
                )}
            })
        }
    }
      render() {        
        return (
            <div>
                <center><h1> MOVIE DETAILS </h1></center>  
                <div className="container-fluid d-flex justify-content-center"> 
                <>                                     
                {this.renderList(this.props.details)}            
                </>                                       
                </div>             
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
      details:state.LatestReducer
    }
  }
  
export default connect(mapStateToProps,actions)(MovieDetails);

