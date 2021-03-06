import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import EditModal from './editModal';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class FeedList extends Component {
    onDeleteClick = (id) => { // on delete clikc will delete the item matching that id
        this.props.deleteItem(id);
    }

    componentDidMount() { // component lifecycle hook
        this.props.getItems()
    }

    render() {
        //destructuring. Pulling out items from this.state
        const { items } = this.props.item;
        return ( 
            <Container>
                <ListGroup>
                    <TransitionGroup className="feed-list">
                        {items.map(({ _id, name, location, imgSrc, desc }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>

                                    <Card class="w-100 p-3">
                                        <Card.Body>
                                            <Row >
                                                <Col>
                                                    <Card.Title>{name}</Card.Title>
                                                    <Card.Subtitle className="mb-2">
                                                        {location}
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        {desc}
                                                    </Card.Text>
                                                </Col>
                                                <Card.Img class="w-50 h-50 ml-auto" variant="top" src={imgSrc} />
                                            </Row>
                                        </Card.Body>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Router>
                                                        <Link to={"/edit/" + _id} className="btn btn-primary btn-block" >
                                                            Edit Fish
                                                        </Link>
                                                        <Switch>
                                                            <Route path={'/edit/:id'} component={EditModal} />
                                                        </Switch>
                                                    </Router>
                                                </Col>
                                                <Col>
                                                    <Button block
                                                        className="remove-btn"
                                                        color="danger"
                                                        onClick={this.onDeleteClick.bind(this, _id)}>
                                                        &times;Delete
                                                        </Button>
                                                </Col>
                                            </Row>
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

const mapStateToProps = (state) => ({// allows me to get the state from redux into react component
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(FeedList);