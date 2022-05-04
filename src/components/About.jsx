import react from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const About = () => {
    return(
        <div className='about'>
            <Container fluid>
  <Row>
    <Col>
        <Image    className='aboutimage' fluid src='https://media.istockphoto.com/photos/mans-legs-on-newly-laid-asphalt-during-road-construction-picture-id469577715?k=20&m=469577715&s=612x612&w=0&h=BWxZw4hJG3zJm2XhTBrDrYq9PiIRQnbBk6yT4ec8cJo=' />
        
    </Col>
    <Col fluid><h2 className='aboutus'>ABOUT US</h2>
    <br/>
    <h6 >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit. Lectus urna duis convallis convallis tellus id.</h6></Col>
  </Row>
  
</Container>
        </div>
    )
}

export default About;