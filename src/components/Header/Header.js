import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContex } from '../../Contexs/Contexs';

function Header() {

  const {user,logOut} = useContext(authContex)

  const handleSignOut = () =>{
    logOut()
    .then(result =>{})
    .catch(e =>console.log(e.message))
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
         <Link to='/'><Navbar.Brand>Master</Navbar.Brand></Link>
          <Nav className="me-auto">
            
            <Nav.Link><Link className='text-white text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/login'>Login</Link></Nav.Link>
            <Nav.Link><Link className='text-white text-decoration-none' to='/register'>Register</Link></Nav.Link>
          </Nav>
          <div className='ms-auto'>
            {
              user?.uid ?
              <>
              <Image title={user.displayName} className='rounded-circle'  style={{width:'60px'}} src={user.photoURL}></Image>
              <Button onClick={handleSignOut} className='ms-4'  variant="info">Log Out</Button>
              </>:
              <Link to='/login'><Button>Login</Button></Link>
            }
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;