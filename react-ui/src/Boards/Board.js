import React, { Component } from 'react';
import {Async} from 'react-select';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import locationApi from '../api/locationApi';


class Board extends Component {

  request;

  constructor(props){
		super(props);
		this.state = {
			username: props.match.params.username,
			boardId: props.match.params.boardId,
			locations: [],
			selectedLocation: null
		}
		
    this.getLocations = this.getLocations.bind(this);
    this.locationSelected = this.locationSelected.bind(this);
  }
  
  getLocations(input) {
    return new Promise(resolve => {
      clearTimeout(this.request);    
      if (!input){
        return resolve({ options: [] });
      }
      this.request = setTimeout(() => {
        return locationApi.getLocationsByText(input)
        .then((json) => {
          resolve({ options: json });
        });        
      }, 500);
    });
  }

  locationSelected(location){
		locationApi.getLocationById(location.value).then(location => {
			console.log(location);
			this.setState({selectedLocation: location})
		})
  }

	showLocationCard(){
		if (!this.state.selectedLocation){
			return;
		}

		return <LocationCard location={this.state.selectedLocation}/>;
	}

  render() {
    return (
      <div>
        <h2>This is the Board: {this.state.boardId} for the User: {this.state.username}</h2>
        <div class="row">
					<Async className="col-sm-12" onChange={this.locationSelected} loadOptions={this.getLocations} autoload={false}/>
				</div>
				<div class="row">
					<div class="col-sm-3">{this.showLocationCard()}</div>
				</div>
      </div>
    );
  }
}

export default Board;

class LocationCard extends Component{

	constructor(props){
		super(props);

		this.state = {
			location: props.location
		}

		console.log(this.state.location);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		alert('Yay! I will be added to the board!');
	}

	render(){
		return(
			<Card>
				<CardImg top src="http://l.yimg.com/a/i/us/we/52/26.gif" alt="Card image cap" />
				<CardBody>
					<CardTitle>{this.state.location.title}</CardTitle>
					<CardSubtitle><strong>{this.state.location.condition.temp}º</strong>, {this.state.location.condition.text}</CardSubtitle>
					<CardText>
						{this.state.location.forecast.map(forecast =>  { 
							<div>
								<label>{forecast.day}, {forecast.date}</label>
								<label>{forecast.text}</label>
								<label>High: {forecast.high}</label>
								<label>Low: {forecast.low}</label>
							</div>
						})}
					</CardText>
					<Button onClick={this.handleClick}>Add to board</Button>
				</CardBody>
			</Card>
		)
	}
}