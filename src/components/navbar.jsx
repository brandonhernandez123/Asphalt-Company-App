import react from 'react'
import { Navbar, Nav, Container, NavDropdown, Image} from 'react-bootstrap'
import { Link } from 'react-scroll/modules'
import logo from '../images/logo.png'



const Navigation = (props) => {
    return(
        
            <header>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='sticky-top'>
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
          ABOUT
          
          
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
          
          
          SERVICES
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
          
          
          OUR WORK
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
          
          
          TESTIMONIALS
          </Link>


      </Nav.Link>
     <Nav.Link className='navlink'>
<Link
          activeClass="active"
          to="section6"
         spy={true}
         smooth={true}
         offset={-100}
         duration={200}>
          
          
          CONTACT
          </Link>

          


      </Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className='navlink'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>1+ 123 456 7810 </Nav.Link>
      <Nav.Link eventKey={2}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
</Navbar>
            </header>
        
        
        
    )
}

          
          
export default Navigation