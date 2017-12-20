import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Card, CardText, CardBody, CardTitle, Button, ListGroup, ListGroupItem
} from 'reactstrap';

class BoardCard extends Component {

    constructor(props) {
        super();

        this.state = {
            username: props.username,
            board: props.board
        }
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.state.board.name}</CardTitle>
                    <CardText>
                        {this.state.board.locations.length > 0 ?
                            <ListGroup>
                                {this.state.board.locations.map(loc => <ListGroupItem>{loc.title}</ListGroupItem>)}
                            </ListGroup>
                            : <span>This board doesn't have locations! Try adding one</span>}
                    </CardText>
                    <Link to={{ pathname: `/boards/${this.state.username}/${this.state.board.id}` }}>
                        <Button outline color="primary">Open</Button>
                    </Link>
                </CardBody>
            </Card>)
    }
}

export default BoardCard;