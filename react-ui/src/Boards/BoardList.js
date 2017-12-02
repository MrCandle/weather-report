import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
            <li><Link to={{ pathname: `/boards/${this.state.userName}/${board.id}` } } >{board.name}</Link></li>
          )}
        </ul>
      </div>
    );
  }
}

export default BoardList;
