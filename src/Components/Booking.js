import React, { useState } from "react";
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import '../Styles/reservation.css';
import QRCode from 'qrcode';

class Booking extends React.Component {

    constructor(props){
        super(props);
        this.state={
            date:'',
            time:'',
            seats:'',            
            conf:'',
            imageUrl:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
    handleSubmit = (event) =>{
        event.preventDefault();         
    }

    handleDateChange = (event) => {
        this.setState({date:event.target.value})
    }

    handleTimeChange = (event) =>{
        this.setState({time:event.target.value})
    }

    handleSeatChange = (event) => {
        this.setState({seats:event.target.value})
    }

    generateQRCode = async () => {
        var confirmation = `You have booked ${this.state.seats}  seats for ${this.state.time} show on ${this.state.date}`
        //alert (confirmation) 
        this.setState({conf:confirmation})
        const response = await QRCode.toDataURL(`${confirmation}`)
        console.log(response)
        this.setState({imageUrl:response})
    }

      render() {   
        const {params} = this.props.match
        console.log("My Param ID: ",params.id) 
        console.log("My param NAME:", params.name)     
      return (
        <div className="boxed">
          <h1>Seat Reservation System</h1>  
          <form onSubmit = {this.handleSubmit}>
                <DatePickerComponent 
                placeholder="Choose Your Date" 
                value={this.state.date} 
                onChange={this.handleDateChange}>
                </DatePickerComponent>
                <label for="seats">Choose Your Showtime:</label>
                    <select name="time" id="time" value={this.state.time} onChange = {this.handleTimeChange}>
                        <option></option>    
                        <option value="12 PM">12:00 PM</option>
                        <option value="6 PM">6:00 PM</option>                
                    </select>  
                    <br/> 
                <label for="seats">Number Of Seats:</label>
                   <select name="seats" id="seats" value={this.state.seats} onChange = {this.handleSeatChange}>             
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>   <br/><br/>
                    <center><button type="submit" onClick= {this.generateQRCode}>CONFIRM BOOKING</button></center>  
            </form>
            <br/><br/>
            <p><b>MOVIE NAME:</b> {params.name}</p>
            <p><b><i>{this.state.conf}</i></b></p>
            {this.state.imageUrl ? (<img src={this.state.imageUrl} alt='QRCode' />) : null}          
        </div>
      )
    }
  }
  
 export default Booking 