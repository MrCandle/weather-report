import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Button,
				Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import * as boardActions from '../actions/boardActions';
import styles from './styles';
	
class BoardList extends Component {

	constructor(props){
		super();
		this.state = {
			username: props.match.params.username,
			modal: false,
			boardName: '',
			modalValid: false
		}

		this.toggle = this.toggle.bind(this);
		this.createBoard = this.createBoard.bind(this);
		this.handleBoardNameChange = this.handleBoardNameChange.bind(this);
	}
	
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
	}
		
	createBoard(){
		this.props.actions.addBoard(this.state.boardName);
	}

	handleBoardNameChange(event){
		this.setState({boardName: event.target.value,});

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

  componentDidMount() {
		if (this.props.boards.length === 0 ){
			this.props.actions.fetchBoards();
		}
  }

  render() {
    return (
      <div>
        <h2>Welcome, {this.state.username}</h2>
				<div class="row">
					{this.props.boards.map(board =>
						<div className="col-sm-12 col-md-6 col-lg-3" style={styles.cardColumn}>
							<Card>
								<CardBody>
									<CardTitle>{board.name}</CardTitle>
									<CardText>Locations in this board: Lista de locations</CardText>
									<Link to={{ pathname: `/boards/${this.state.username}/${board.id}`}}>
										<Button>View</Button>
									</Link>
								</CardBody>
							</Card>
						</div>
					)}
				</div>
				<div class="row">
					<div class="offset-sm-9">
						<Button color="primary" onClick={this.toggle}>Add board</Button>
					</div>
				</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>New board</ModalHeader>
          <ModalBody>
						<Label for="boardName">Board name</Label>
						<Input type="text" name="boardName" id="boardName" placeholder="Enter a cool name" value={this.state.boardName} onChange={this.handleBoardNameChange}/>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.createBoard} disabled={!this.state.modalValid}>Create!</Button>{' '}
            <Button color="link" onClick={this.toggle}>Nevermind</Button>
          </ModalFooter>
        </Modal>
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
