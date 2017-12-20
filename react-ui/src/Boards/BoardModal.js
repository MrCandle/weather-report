import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Label, Button , Input} from 'reactstrap';

class BoardModal extends Component {
    constructor(props) {
        super()

        this.state = {
            isNew: props.isNew,
            boardName: props.name
        }

        this.handleBoardNameChange = this.handleBoardNameChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleBoardNameChange(event) {
        this.setState({
            boardName: event.target.value
        })
    }

    handleSave() {
        this.props.onSave(this.state.boardName)
    }

    handleCancel() {
        this.props.onCancel()
    }

    render() {
        return (
            <Modal isOpen={true}>
                <ModalHeader>
                    {this.state.isNew ?
                        <span>New Board</span> :
                        <span>Edit Board</span>
                    }
                </ModalHeader>
                <ModalBody>
                    <Label for="boardName">Board name</Label>
                    <Input type="text" name="boardName" id="boardName" placeholder="Enter a cool name" value={this.state.boardName} onChange={this.handleBoardNameChange} />
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.handleSave} disabled={!this.state.boardName}>{this.state.isNew ? <span>Create!</span> : <span>Update!</span>}</Button>{' '}
                    <Button color="link" onClick={this.handleCancel}>Nevermind</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default BoardModal;