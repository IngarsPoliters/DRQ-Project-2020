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


    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    componentDidMount() {
        this.props.getItems()
    }


    render() {
        //destructuring. Pulling out items from this.state
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="feed-list">
                        {items.map(({ _id, name, location, imgSrc }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Card class="w-100 p-3">
                                        <Card.Img class="w-50 ml-auto" variant="top" src={imgSrc}>

                                        </Card.Img>
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                {location}
                                            </Card.Text>
                                            <Container >
                                                <Row>
                                                    <Col>
                                                    <Router>
                                                        <Link to={"/edit/" + _id} className="btn btn-primary">
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
                                            </Container>
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


export default connect(mapStateToProps, { getItems, deleteItem })(FeedList);