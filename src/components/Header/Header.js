import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  href="#home">Master</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link><Link className='text-white text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/login'>Login</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/register'>Register</Link></Nav.Link>
          </Nav>
          <div className='ms-auto'>
              <Button>Login</Button>
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;