import React, { Component } from 'react';
import {Async} from 'react-select';
import locationApi from '../api/locationApi';


class Board extends Component {

  request;

  constructor(props){
    super();
    this.username = props.match.params.username;
    this.boardId = props.match.params.boardId;

    this.getLocations = this.getLocations.bind(this);
    this.locationSelected = this.locationSelected.bind(this);
  }
  
  getLocations(input) {
    return new Promise(resolve => {
      clearTimeout(this.request);    
      if (!input){
        resolve({ options: [] });
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
    alert(location.value);
  }

  render() {
    return (
      <div>
        <h2>This is the Board: {this.boardId} for the User: {this.username}</h2>
        <Async onChange={this.locationSelected} loadOptions={this.getLocations}/>
      </div>
    );
  }
}

export default Board;
