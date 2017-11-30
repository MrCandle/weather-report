import React, { Component } from 'react';

class BoardList extends Component {

  constructor(props){
    super();
    this.userName = props.match.params.user;
  }
  
  render() {
    return (
      <div>
        <h2>This are the nested routes for {this.userName}</h2>
      </div>
    );
  }
}

export default BoardList;
