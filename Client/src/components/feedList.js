import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

class FeedList extends Component {
    state = {
        items: [
            { id: uuidv4(), name: 'Fish' },
            { id: uuidv4(), name: 'Nemo' },
            { id: uuidv4(), name: 'Dory' }
        ]
    }

    render() {
        //destructuring. Pulling out items from this.state
        const { items } = this.state;
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
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}>&times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }




}

export default FeedList;