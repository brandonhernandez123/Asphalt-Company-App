import {react, useState} from 'react'
import {Container, Row, Col, Button, Form, InputGroup, FormControl} from 'react-bootstrap'


const Contact = () => {

    let istate = {
        from_name: '',
        message: '',
    }

    const [newMessage, setNewMessage] = useState({
        from_name: '',
        to_name: 'emaildemo@gmail.com',
        message: '',
        from_email: ''
    })




    return(
        <div>
            <Container fluid>
            <Row>
                
                <Col>
                <h2>GET IN TOUCH</h2>
                <br/>
                <br/>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
      
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
            </Row>

                        <InputGroup size="lg">
    
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" className='mb-3' placeholder='Message' />
                        </InputGroup>
                            <br/>
                            <Button variant="danger" type="submit">Submit</Button>
                </Form>
                </Col>
                <Col>2 of 2</Col>
            </Row>
            </Container>
        </div>
    )
}


export default Contact;