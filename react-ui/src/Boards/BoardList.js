import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../actions/boardActions';
import {Link} from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import styles from './styles';
	
class BoardList extends Component {

	constructor(props){
		super();
		this.username = props.match.params.username;
	}
	
  componentDidMount() {
		if (this.props.boards.length === 0 ){
			this.props.actions.fetchBoards();
		}
  }

  render() {
    return (
      <div>
        <h2>Welcome, {this.username}</h2>
				<div class="row">
					{this.props.boards.map(board =>
						<div className="col-sm-12 col-md-6 col-lg-3">
							<Card style={styles.boardCard}>
								<CardBody>
									<CardTitle>{board.name}</CardTitle>
									<CardText>Locations in this board: Lista de locations</CardText>
									<Link to={{ pathname: `/boards/${this.username}/${board.id}`}}>
										<Button>View</Button>
									</Link>
								</CardBody>
							</Card>
						</div>
					)}
				</div>
				<div class="row">
					<Link to={{ pathname: `/boards/${this.username}/0`}} class="offset-sm-9">
						<Button color="primary">Add board</Button>
					</Link>
				</div>
			</div>
    )
  }
}

function mapStateToProps(state) {
	if (state.boards.length > 0){
		return {boards: state.boards}
	} else {
		return {boards: []}
	}
}

function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(boardActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
