import React, { Component } from 'react';

class Board extends Component {

  constructor(props){
    super();
    this.userName = props.match.params.user;
    this.boardId = props.match.params.boardId
  }
  
  render() {
    return (
      <div>
        <h2>This is the Board: {this.boardId} for the User: {this.userName}</h2>
      </div>
    );
  }
}

export default Board;