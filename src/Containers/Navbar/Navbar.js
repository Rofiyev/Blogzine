import React, { useContext } from 'react'
import './Navbar.css';
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.svg';
import logo_2 from './logo-light.svg';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsSearch, BsMoon } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import Button from 'react-bootstrap/esm/Button';
import ThemeContext from '../../Context/ThemeContext';

export default function NavbarContent({ title, btnTitle, data }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar id='navbarDiv' className={theme} expand="lg">
      <Container className='d-flex align-items-center p-3'>
        <Navbar.Brand href="#home"><img id="logo" src={theme == 'light' ? `${logo}` : `${logo_2}`} alt="Brand" /></Navbar.Brand>
        <div id="Navbar" className='d-flex align-items-center gap-2'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Home" className='mx-2 title-active' id="basic-nav-dropdown" >
                <Container id="navbar-page-one" >
                  {data.navbar_1.map((item, i) => {
                    return <NavDropdown.Item key={i} className={item.class} id={item.id}>{item.title}</NavDropdown.Item>
                  })}
                </Container>
              </NavDropdown>
              <NavDropdown title="Pages" className='mx-2' id="basic-nav-dropdown">
                <Container id="navbar-page-one">
                  {data.navbar_2.map(((item, i) => {
                    return <NavDropdown.Item key={i} id={item.id} className={item.class}>{item.title}</NavDropdown.Item>
                  }))}
                </Container>
              </NavDropdown>
              <NavDropdown title="Post" className='mx-2' id="basic-nav-dropdown">
                <Container id="navbar-page-one">
                  {data.navbar_3.map((item, i) => {
                    return <NavDropdown.Item key={i} className={item.class}>{item.title}</NavDropdown.Item>
                  })}
                </Container>
              </NavDropdown>
              <NavDropdown title="Lifestyle" className='mx-2' id="basic-nav-dropdown">
                <Container id="navbar-page-one">
                  {data.navbar_4.map((item, i) => {
                    return <NavDropdown.Item key={i} className="item">{item}</NavDropdown.Item>
                  })}
                </Container>
              </NavDropdown>
            </Nav>
            <NavDropdown.Item className='item mx-4' id='dashboard'>{title}</NavDropdown.Item>
          </Navbar.Collapse>
          <div onClick={toggleTheme} id="toogle" className='mx-3'><span className='shadow'><FaSun id='sun' /><BsMoon id='moon' /></span></div>
          <FiMoreHorizontal className='more-icon' />
          <Button variant='danger' className='mx-3 fw-bold'>{btnTitle}</Button>
          <BsSearch className='search-icon' />
        </div>
      </Container>
    </Navbar>
  )
}
