import react from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-scroll/modules'


const About = () => {
    return(
        <div className='about'>
            <Container fluid>
  <Row>

   
        <h2 className='aboutus2'>ABOUT US</h2>
        <p className='fill'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</Row>
    <br/>
    <Row>
        <h2>WHY CHOOSE US</h2>
        <Col>
            <ul className='chooseus'>
                <li>
                  Lorem Ipsum Dolor
                </li>
                <li>
                  Lorem Ipsum Dolor
                </li>
                <li>
                  Lorem Ipsum Dolor
                </li>
            </ul>
        </Col>
        <Col>
            <ul className='chooseus'>
            <li>
                  Lorem Ipsum Dolor
                </li>
                <li>
                  Lorem Ipsum Dolor
                </li>
                <li>
                  Lorem Ipsum Dolor
                </li>
            </ul>
        </Col>
    </Row>
    <br/>
  
<Link
          activeClass="active"
          to="section6"
         spy={true}
         smooth={true}
         offset={-100}
         duration={200}>
           <Button className='submit'>
               CONTACT US
          </Button>
          
          </Link>
</Container>
        </div>
    )
}

export default About;