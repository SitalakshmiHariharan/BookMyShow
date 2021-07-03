import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home"><h1>Motion Pictures Of The World</h1></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-info">Search</Button>
                </Navbar.Collapse>
            </Navbar>            
        </div>
    )
}


/**
 * <Navbar bg="dark" variant="dark" fixed="top">   
                <Navbar.Brand Brand href="#home">Motion Pictures Of The World</Navbar.Brand>                              
                <Button variant="outline-success">Search</Button>
            </Navbar> 
 * 
 */