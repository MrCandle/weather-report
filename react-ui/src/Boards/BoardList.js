import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../actions/boardActions';
import {Link} from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class BoardList extends Component {

	constructor(props){
		super();
	}
	
  componentDidMount() {
		if (this.props.boards.length === 0 ){
			this.props.actions.fetchBoards();
		}
  }

	getUsername(){
		return sessionStorage.getItem('currentUser');
	}

  render() {
    return (
      <div>
        <h2>This are the nested routes for {this.getUsername()}</h2>
        <ul>
          {this.props.boards.map(board =>
            <li><Link to={{ pathname: `/boards/${this.getUsername()}/${board.id}` } } >{board.name}</Link></li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
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
