import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { editItem } from '../actions/itemActions';
import axios from 'axios';

class EditModal extends Component {
    constructor() {
        super()

        this.state = { // item state
            name: '',
            location: '',
            imgSrc: '',
            desc: ''
        }
    }

    componentDidMount() { // component lifcycle hook
        this.toggle();// togles the modal to edit item
        console.log(this.props.match.params.id); 
        axios.get(`http://localhost:5000/api/items/${this.props.match.params.id}`) // getting the item of that id
            .then(response => {
                console.log(response);
                this.setState({ // setting the state of the requested item
                    _id: response.data._id,
                    name: response.data.name,
                    location: response.data.location,
                    imgSrc: response.data.imgSrc,
                    desc: response.data.desc
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    toggle = () => { // toggling modal state
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {// On each input set the state of vars 
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.location]: e.target.value,
            [e.target.imgSrc]: e.target.value,
            [e.target.desc]: e.target.desc
        });    
    }

    onSubmit = (e) => {// on submit takes the input state 
        e.preventDefault();
        // assinging state variables to newItem obj 
        const newItem = {
            name: this.state.name,
            location: this.state.location,
            imgSrc: this.state.imgSrc,
            desc: this.state.desc,
            _id: this.state._id
        }
        console.log(newItem);
        //Add item via addItem Action
        this.props.editItem(newItem);
        //return back to home page after edit is submitted
        this.props.history.push('/');
        //reloads the page on submit. as the componentDidMount only works once during lifecycle
        window.location.reload(true);
        // Close Modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} $>Edit Fish</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Fish</Label>
                                <Input type="text" name="name" id="item"
                                    value={this.state.name} onChange={this.onChange} />


                                <Label for="item">Location</Label>
                                <Input type="text" name="location" id="item"
                                    value={this.state.location} onChange={this.onChange} > </Input>

                                <Label for="item">Fish Image</Label>
                                <Input type="text" name="imgSrc" id="item"
                                    value={this.state.imgSrc} onChange={this.onChange} > </Input>

                                <Label for="item">Fish Description</Label>
                                <Input type="textarea" name="desc" id="item"
                                    value={this.state.desc} onChange={this.onChange} > </Input>

                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Submit</Button>
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

export default connect(mapStateToProps, { editItem })(EditModal)