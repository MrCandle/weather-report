import React, { Component } from 'react';
import axios from 'axios';

class BoardList extends Component {

  constructor(props) {
    super();

    this.state = {
      userName: props.match.params.user,
      boards: []
    }
  }

  componentDidMount() {
    axios.get(`${window.location.origin}/api/boards`)
      .then(res => {
        this.setState({boards: res.data});
      });
  }

  render() {
    return (
      <div>
        <h2>This are the nested routes for {this.state.userName}</h2>
        <ul>
          {this.state.boards.map(board =>
            <li key={board.id}>{board.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default BoardList;
