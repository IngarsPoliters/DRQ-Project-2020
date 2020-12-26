import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class FeedList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    render() {
        //destructuring. Pulling out items from this.state
        const { items } = this.props.item;
        return (
            <Container>
                <Button className="mb-5"
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Fish')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuidv4(), name }]
                            }));
                        }
                    }}
                >Add Fish
                </Button>

                <ListGroup>
                    <TransitionGroup className="feed-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Card class="w-100 p-3">
                                        <Card.Img class="w-25" variant="top" src="https://static.wikia.nocookie.net/pixar/images/a/aa/Nemo-FN.png/revision/latest?cb=20160710221104" />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                Desciption
                                            </Card.Text>
                                            <Button
                                                className="remove-btn"
                                                color="danger"
                                                size="sm"
                                                onClick={() => {
                                                    this.setState(state => ({
                                                        items: state.items.filter(item => item.id !== id)
                                                    }));
                                                }}>&times;Delete
                                    </Button>
                                            
                                        </Card.Body>
                                    </Card>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

FeedList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});


export default connect(mapStateToProps, {getItems})(FeedList);