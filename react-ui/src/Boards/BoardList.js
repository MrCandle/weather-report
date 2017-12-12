import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../actions/boardActions';
import {Link} from 'react-router-dom';

class BoardList extends Component {

	username;

	constructor(props){
		super();
		this.username = sessionStorage.getItem('currentUser').username;
	}
	
  componentDidMount() {
		console.log(this.props);
		if (this.props.boards.length === 0 ){
			this.props.actions.fetchBoards();
		}
  }

  render() {
    return (
      <div>
        <h2>This are the nested routes for {this.username}</h2>
        <ul>
          {this.props.boards.map(board =>
            <li><Link to={{ pathname: `/boards/${this.username}/${board.id}` } } >{board.name}</Link></li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
	console.log('mapStateToProps', state)
	if (state.boards.length > 0){
		return {boards: state.boards}
	} else {
		return {boards: []}
	}
};

function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(boardActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
