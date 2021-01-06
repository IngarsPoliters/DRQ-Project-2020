import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand, Container } from 'reactstrap';
import icon from '../icon/user.png';





export class NavBar extends React.Component {
    //Added a navbar component to route through the different components
    state = {
        isOpen: false // set to false by default
    }

    toggle = () => { // NavbarToggler calls this method 
        this.setState({ // makes the page responsive
            isOpen: !this.state.isOpen // if the screen is small, navbar is collapsed and provides the hamburger menu 
        });
    }
    render() {



        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5" >
                    <Container>
                        <NavbarBrand href="/">FishBook</NavbarBrand>
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
