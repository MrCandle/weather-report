import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
	Card, CardText, CardBody, CardTitle, Button,
	Modal, ModalHeader, ModalBody, ModalFooter, Label, Input,
	ListGroup, ListGroupItem
} from 'reactstrap';
import FaPencil from 'react-icons/lib/fa/pencil';
import * as boardListActions from '../actions/boardListActions';
import styles from './styles';

class BoardList extends Component {

	constructor(props) {
		super();
		this.state = {
			username: props.match.params.username,
			modal: false,
			boardId: 0,
			boardName: '',
			modalValid: false,
			boards: props.boards
		}

		this.toggle = this.toggle.bind(this);
		this.createBoard = this.createBoard.bind(this);
		this.updateBoard = this.updateBoard.bind(this);
		this.handleBoardNameChange = this.handleBoardNameChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleCreate = this.handleCreate.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	createBoard() {
		this.props.actions.addBoard(this.state.boardName);
		this.toggle();
	}

	updateBoard() {
		const updatedBoard = this.state.boards.find(b => b.id === this.state.boardId);
		updatedBoard.name = this.state.boardName;
		this.props.actions.editBoard(updatedBoard);
		this.toggle();
	}

	handleBoardNameChange(event) {
		this.setState({ boardName: event.target.value });

		if (event.target.value) {
			this.setState({
				modalValid: true
			})
		} else {
			this.setState({
				modalValid: false
			})
		}
	}

	handleEdit(board) {
		this.setState({
			boardId: board.id,
			boardName: board.name
		});
		this.toggle();
	}

	handleCreate() {
		this.setState({
			boardId: 0,
			boardName: ''
		});
		this.toggle();
	}

	componentDidMount() {
		if (this.props.boards.length === 0) {
			this.props.actions.fetchBoards();
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ boards: nextProps.boards })
	}

	render() {
		return (
			<div>
				<h2>Welcome, {this.state.username}</h2>
				<div class="row">
					{this.state.boards.map(board =>
						<div className="col-sm-12 col-md-6 col-lg-3" style={styles.cardColumn}>
							<Card>
								<CardBody>
									<CardTitle>{board.name}<span onClick={() => this.handleEdit(board)}><FaPencil size={18} color="gray" style={{ marginLeft: '10px', verticalAlign: 'top' }} /></span></CardTitle>
									<CardText>
										{board.locations.length > 0 ?
											<ListGroup>
												{board.locations.map(loc => <ListGroupItem>{loc.title}</ListGroupItem>)}
											</ListGroup>
											: <span>This board doesn't have locations! Try adding one</span>}
									</CardText>
									<Link to={{ pathname: `/boards/${this.state.username}/${board.id}` }}>
										<Button outline color="primary">Open</Button>
									</Link>
								</CardBody>
							</Card>
						</div>
					)}
				</div>
				<div class="row">
					<div class="offset-sm-9">
						<Button color="primary" onClick={this.handleCreate}>Add board</Button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { boards: state.boards }
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(boardListActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
