import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import icon from '../icon/user.png';

export class NavBar extends React.Component {
    


    //Added a navbar component to route through the different components
    render() {
        //var icon = (
          //  <img src={require('user.png')}/>
           // ) <img src={icon}/> 
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="container-fluid">
                <Nav.Item>
                    <Navbar.Brand href="#home">PC Parts</Navbar.Brand>
                </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#features">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#systemBuilder">System Builder</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#completedBuilds">Completed Builds</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  className="ml-auto" >
                        <Nav.Link  href="#login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#login"><img src={icon}/> </Nav.Link> 
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}