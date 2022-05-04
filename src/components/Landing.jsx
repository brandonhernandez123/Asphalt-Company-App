import react from 'react'
import logo from '../images/logo.png'
import {Container, Row, Col, Image} from 'react-bootstrap'



const Landing = () => {
    return(
        <div>
            <Container fluid>
  <Row>
    <Col>
    <Image fluid  className='logo' src={logo} />
    </Col>
  </Row>
 

</Container>
            
            
        </div>
    )
}


export default Landing