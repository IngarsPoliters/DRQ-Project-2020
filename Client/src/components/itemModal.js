import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { v4 as uuidv4 } from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false, // represents if the modal is open or not
        name: '',
        location: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, [e.target.location]: e.target.value }); // [6] 19.56
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuidv4(),
            name: this.state.name,
            location: this.state.location,
            imgSrc: this.state.imgSrc
        }
        //Add item via addItem Action
        this.props.addItem(newItem);

        // Close Modal
        this.toggle();

    }

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>Add Fish</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} $>Add To Fish List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Fish</Label>
                                <Input type="text" name="name" id="item"
                                    placeholder="Add Fish" onChange={this.onChange} />


                                <Label for="item">Location</Label>
                                <Input type="text" name="location" id="item"
                                    placeholder="Enter fish location" onChange={this.onChange} > </Input>

                                <Label for="item">Fish Image</Label>
                                <Input type="text" name="imgSrc" id="item"
                                    placeholder="Enter fish image source link" onChange={this.onChange} > </Input>


                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Fish</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);