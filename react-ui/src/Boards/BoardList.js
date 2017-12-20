import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import BoardCard from './BoardCard';
import BoardModal from './BoardModal';
import * as boardListActions from '../actions/boardListActions';
import styles from './styles';

class BoardList extends Component {

	constructor(props) {
		super();
		this.state = {
			username: props.match.params.username,
			modal: false,
			boards: props.boards
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	handleSave(name) {
		this.props.actions.addBoard(name);
		this.toggleModal();
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
							<BoardCard username={this.state.username} board={board}></BoardCard>
						</div>
					)}
				</div>
				<div class="row">
					<div class="offset-sm-9">
						<Button color="primary" onClick={this.toggleModal}>Add board</Button>
					</div>
				</div>
				{this.state.modal &&
					<BoardModal isNew={true} onSave={this.handleSave} onCancel={this.toggleModal}></BoardModal>}
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
