import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

class App extends React.Component{
  render(){
    return(
      <div>
      {/* <Link to="/">Beranda</Link> |
      <Link to="/tentangsaya">Tentang Saya</Link> |
      <Link to="/karya">Karya</Link> |
      <Link to="/kontak">Kontak</Link> <hr />
      <Link to="/list" className="nav-link">List</Link>
      <Link to="/gallery" className="nav-link">Gallery</Link> */}

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/tentangsaya" className="nav-link">Tentang Saya</Link>
                <Link to="/karya" className="nav-link">Karya</Link>
                <Link to="/kontak" className="nav-link">Kontak</Link>
                <Link to="/list" className="nav-link">List</Link>
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <p><Utama /></p>
      </div>
    );
  }
}

export default App;