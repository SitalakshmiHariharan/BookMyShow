import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Styles/slider.css';
import Slider from 'react-slick';
import {connect} from  'react-redux';
import * as actions from '../Actions';


class MovieSlider extends Component {

  componentDidMount(){
    this.props.sliderData()
  }

  renderList = (slider) => {
    if(slider){
      return slider.map((data) => {       
        return(
              <>              
              <center><img width="100%" height="500px" src={data.image} alt='MovieImage' /></center>                          
            </>
        )
      })
    }
  }

  render() {  
    const settings = {
      dots:true,
      fade:true,
      infinite:true,
      speed: 500,
      slidesToShow:1,
      arrows:true,
      slidesToScroll:1,
      className: "slides"
    }  
    return (      
          <div className="App" style={{padding:50}}>
            <Slider {...settings}>
              {this.renderList(this.props.slider)}
            </Slider> 
          </div>
    )
  }
}

function mapStateToProps(state){  
  return{
    slider:state.SliderReducer
  }
}

export default connect(mapStateToProps,actions)(MovieSlider);

  

