import React, { Component } from 'react';
import { Async } from 'react-select';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import styles from './styles';
import boardApi from '../api/boardApi';
import locationApi from '../api/locationApi';
import LocationList from './LocationList';
import LocationSearch from './LocationSearch';

class Board extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: props.match.params.username,
			board: {
				id: props.match.params.boardId,
				name: '',
				locations: []
			},
		}

		this.locationSelected = this.locationSelected.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	componentDidMount() {
		boardApi.getBoard(this.state.board.id).then(board => {
			board.locations.forEach(loc => loc.isSelected = true);
			this.setState({ board: board });
		});
	}

	locationSelected(location) {
		locationApi.getLocationById(location.value).then(location => {
			location.isSelected = false;
			this.setState(prevState => ({
				board: {
					locations: [...prevState.board.locations, location]
				}
			}))
		})
	}

	handleToggle(location){
		console.log(location);
	}

	render() {
		return (
			<div>
				<h2>{this.state.board.name}:</h2>
				<LocationSearch handler={this.locationSelected} />
				<LocationList locations={this.state.board.locations} handleToggle={this.handleToggle}/>
			</div>
		);
	}
}

export default Board;
