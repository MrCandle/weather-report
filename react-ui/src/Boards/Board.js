import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Async } from 'react-select';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import styles from './styles';
import locationApi from '../api/locationApi';
import LocationList from './LocationList';
import LocationSearch from './LocationSearch';
import * as boardActions from '../actions/boardActions';

class Board extends Component {

	constructor(props) {
		super();

		this.state = {
			board: props.board,
		}

		this.locationSelected = this.locationSelected.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
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
			location.isSelected = false;
			this.setState(prevState => ({
				board: {
					id: prevState.board.id,
					name: prevState.board.name,
					locations: [...prevState.board.locations, location]
				}
			}))
		})
	}

	handleToggle(location) {
		// this.state.board.locations.
		// 	location.isSelected = !location.isSelected;

	}

	render() {
		return (
			<div>
				<h2>{this.state.board.name}:</h2>
				<LocationSearch handler={this.locationSelected} />
				<LocationList locations={this.state.board.locations} handleToggle={this.handleToggle} />
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
