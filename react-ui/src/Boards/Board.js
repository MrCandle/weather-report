import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Async } from 'react-select';
import FaPencil from 'react-icons/lib/fa/pencil';
import styles from './styles';
import locationApi from '../api/locationApi';
import BoardModal from './BoardModal';
import LocationList from './LocationList';
import LocationSearch from './LocationSearch';
import * as boardActions from '../actions/boardActions';

class Board extends Component {

	constructor(props) {
		super();

		this.state = {
			board: props.board,
			modal: false
		}

		this.locationSelected = this.locationSelected.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleRemoval = this.handleRemoval.bind(this);
	}

	componentDidMount() {
		if (!this.props.board.id) {
			this.props.actions.fetchBoard(this.props.match.params.boardId);
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ board: nextProps.board })
	}

	locationSelected(location) {
		locationApi.getLocationById(location.value).then(location => {
			this.setState(prevState => ({
				board: {
					id: prevState.board.id,
					name: prevState.board.name,
					locations: [...prevState.board.locations, location]
				}
			}));
			this.props.actions.editBoard(this.state.board);
		})
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	handleSave(name) {
		var newBoard = {
			id: this.state.board.id,
			name: name,
			locations: this.state.board.locations
		}
		this.props.actions.editBoard(newBoard);
		this.toggleModal();
	}

	handleRemoval(location) {
		var newArray = this.state.board.locations.slice();
		newArray.splice(newArray.findIndex(l => l.woeid === location.woeid), 1);
		var newBoard = {
			id: this.state.board.id,
			name: this.state.board.name,
			locations: newArray
		}
		this.props.actions.editBoard(newBoard);
	}

	render() {
		return (
			<div>
				<h2>{this.state.board.name}: <span onClick={this.toggleModal}><FaPencil size={18} color="gray" style={{ marginLeft: '10px', verticalAlign: 'top' }} /></span></h2>
				<LocationSearch handler={this.locationSelected} />
				<LocationList locations={this.state.board.locations} handleRemoval={this.handleRemoval} />
				{this.state.modal &&
					<BoardModal isNew={false} name={this.state.board.name} onSave={this.handleSave} onCancel={this.toggleModal}></BoardModal>}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { board: state.board }
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(boardActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
