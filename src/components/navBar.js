import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand, Container } from 'reactstrap';
import icon from '../icon/user.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




export class NavBar extends React.Component {
    //Added a navbar component to route through the different components
    state = {
        isOpen: false // stack [3] 20.35min
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {



        return (
            <div className="App">
                <Navbar color="dark" dark expand="sm" className="mb-5" variant="dark">
                    <Container>
                        <NavbarBrand href="/">FISHBOOK</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#login"><img src={icon} />Login </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>


            </div>

        );
    }
}
