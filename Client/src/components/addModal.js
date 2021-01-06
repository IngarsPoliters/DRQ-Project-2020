import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


class AddModal extends Component {
    state = { // item state - modal , name, location, image source and description
        modal: false, // represents if the modal is open or not
        name: '',
        location: '',
        imgSrc: '',
        desc: ''
    }

    toggle = () => {// toggles the itemModal state
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {// On each input set the state of vars 
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.location]: e.target.value,
            [e.target.imgSrc]: e.target.value,
            [e.target.desc]: e.target.value
        });  
    }

    onSubmit = (e) => {// on submit takes the input state 
        e.preventDefault();
        // assinging state variables to newItem obj 
        const newItem = {
            name: this.state.name,
            location: this.state.location,
            imgSrc: this.state.imgSrc,
            desc: this.state.desc
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

                                <Label for="item">Fish Description</Label>
                                <Input type="textarea" name="desc" id="item"
                                    placeholder="Enter fish description" onChange={this.onChange} > </Input>


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

export default connect(mapStateToProps, { addItem })(AddModal);