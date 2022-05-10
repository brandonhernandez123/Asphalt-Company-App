import react from 'react'
import {Container, Row, Col, Image, Stack} from 'react-bootstrap'

const About = () => {
    return(
        <div className='about'>
            <Container fluid>
  <Row>
<Col fluid>
  <Stack direction="horizontal" gap={3}>
  <div>
        <Image    className='aboutimage' fluid src='https://media.istockphoto.com/photos/mans-legs-on-newly-laid-asphalt-during-road-construction-picture-id469577715?k=20&m=469577715&s=612x612&w=0&h=BWxZw4hJG3zJm2XhTBrDrYq9PiIRQnbBk6yT4ec8cJo=' />


  </div>
  
  <div>   
      <h2 className='aboutus'>ABOUT US</h2>
      <br/>
  <p className='abouttext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit. Lectus urna duis convallis convallis tellus id.</p>
</div>
  <div className="bg-light border">Third item</div>
</Stack>

        
    </Col>
    
    <br/>
  </Row>
  
</Container>
        </div>
    )
}

export default About;