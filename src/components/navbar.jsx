import react from 'react'
import { Navbar, Nav, Container, NavDropdown, Image} from 'react-bootstrap'
import { Link } from 'react-scroll/modules'
import logo from '../images/logo.png'



const Navigation = (props) => {
    return(
        
            <header>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
  <Container fluid>
     
  <Navbar.Brand>
<Image fluid src={logo}  width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo" />

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='navlink'>
 <Link
          activeClass="active"
          to="section2"
         spy={true}
         smooth={true}
         offset={-100}
         duration={300}>
          Features
          
          
          </Link> 


      </Nav.Link>
      <Nav.Link className='navlink'>
<Link
          activeClass="active"
          to="section3"
         spy={true}
         smooth={true}
         offset={-100}
         duration={200}>
          
          
          Services
          </Link>


      </Nav.Link>
      <Nav.Link className='navlink'>
<Link
          activeClass="active"
          to="section4"
         spy={true}
         smooth={true}
         offset={-100}
         duration={200}>
          
          
          Gallery
          </Link>


      </Nav.Link>
      <Nav.Link className='navlink'>
<Link
          activeClass="active"
          to="section5"
         spy={true}
         smooth={true}
         offset={-100}
         duration={200}>
          
          
          Gallery
          </Link>


      </Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link className='navlink'>Gallery</Nav.Link>
      <Nav.Link eventKey={2}>
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
</Navbar>
            </header>
        
        
        
    )
}

          
          
export default Navigation