import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Card, CardText, CardBody, CardTitle, Button, ListGroup, ListGroupItem, Label
} from 'reactstrap';
import FaTrash from 'react-icons/lib/fa/trash';

class BoardCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            board: props.board
				}
				
				this.handleOpen = this.handleOpen.bind(this);
				this.handleRemove = this.handleRemove.bind(this);
    }

		handleOpen(){
			this.props.history.push(`/boards/${this.state.username}/${this.state.board.id}`);
		}

		handleRemove(){
			this.props.onRemove(this.state.board.id);
		}

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.state.board.name}<span onClick={this.handleRemove}><FaTrash /></span></CardTitle>
                    <CardText>
                        {this.state.board.locations.length > 0 ?
                            <ListGroup>
                                {this.state.board.locations.map(loc => <ListGroupItem>{loc.title}</ListGroupItem>)}
                            </ListGroup>
                            : <span>This board doesn't have locations! Try adding one</span>}
                    </CardText>
										<Button outline color="primary" onClick={this.handleOpen}>Open</Button>
                </CardBody>
            </Card>)
    }
}

export default withRouter(BoardCard);