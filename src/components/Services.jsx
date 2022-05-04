import react from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'


const Services = () => {
    return(
        <div className='services'>
            <h2>OUR SERVICES</h2>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices eros in.</h6>
            <Container fluid>
                <Row md={4}>
                    <Col>
                    <Image fluid roundedCircle src='https://media.istockphoto.com/photos/worker-levelling-fresh-asphalt-on-a-road-construction-site-picture-id512293553?k=20&m=512293553&s=612x612&w=0&h=oytNjgNpCo5nsw1vsYwh8wmcrTJSA9QsDXN2_v23HF8=' />
                    </Col>
                    <Col xs={6}>2 of 3</Col>
                     <Col>3 of 3</Col>
                </Row>
            </Container>
        
        </div>
    )
}

export default Services;