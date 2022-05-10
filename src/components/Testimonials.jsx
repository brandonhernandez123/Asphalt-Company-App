import react from 'react'
import {Row, Col, Container, Image} from 'react-bootstrap'



const Testimonials = () => {

    
    return(
        <div>
            <Container  fluid>
                <h1>TESTIMONIALS</h1>
                <Row>
                    <Col>
                        <Image src='https://i.imgur.com/9hoQIE6.jpg' className='testimonialimage' />
                        <p className='fill'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit.""</p>
                        
                    </Col>
                    <Col>
                    <Image src='https://i.imgur.com/6XXjqcU.jpg' className='testimonialimage' />
                        <p className='fill'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit.""</p>
                       
                    </Col>
                    <Col>
                    <Image src='https://i.imgur.com/UNa3FdR.jpg' className='testimonialimage' />
                        <p className='fill'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit.""</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image src='https://i.imgur.com/9CmxOXF.jpg' className='testimonialimage' />
                        <p className='fill'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit.""</p>
                        
                    </Col>
                    <Col>
                    <Image src='https://i.imgur.com/tdYvzwt.jpeg' className='testimonialimage' />
                        <p className='fill'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit.""</p>
                       
                    </Col>
                    <Col>
                    <Image src='https://i.imgur.com/0vAaCLt.jpg' className='testimonialimage' />
                        <p className='fill'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit.""</p>
                    </Col>
                </Row>

  
            </Container>
        </div>
    )
}


export default Testimonials