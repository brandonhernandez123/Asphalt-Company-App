import react from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-scroll/modules'


const About = () => {
    return(
        <div className='about'>
            <Container fluid>
  <Row>
<Col fluid>
 <h2 className='aboutus2'>ABOUT US</h2>
 <p className='aboutp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo. Porta non pulvinar neque laoreet suspendisse. Tempus egestas sed sed risus. Egestas congue quisque egestas diam in arcu cursus euismod. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Ante in nibh mauris cursus mattis molestie a iaculis at. Tellus cras adipiscing enim eu. Aenean vel elit scelerisque mauris pellentesque pulvinar. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Est ullamcorper eget nulla facilisi etiam. Laoreet id donec ultrices tincidunt. Sapien nec sagittis aliquam malesuada bibendum.</p>

        
    </Col>
    
    <br/>
  </Row>
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