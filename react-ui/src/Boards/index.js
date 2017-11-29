import React, { Component } from 'react';

class Boards extends Component {

  constructor(props){
    super();
    this.username = props.match.params.user;
  }
  
  render() {
    return (
      <div>
        <h2>This are the nested routes for {this.username}</h2>
      </div>
    );
  }
}

export default Boards;
