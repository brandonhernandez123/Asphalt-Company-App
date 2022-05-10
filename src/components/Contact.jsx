import {react, useState} from 'react'
import {Container, Row, Col, Button, Form, InputGroup, FormControl} from 'react-bootstrap'
import {send} from 'emailjs-com'


const Contact = () => {

    let istate = {
        from_name: '',
        message: '',
        from_email: ''
    }

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'brandoncinthia0621@gmail.com',
        message: '',
        from_email: ''
    })

    const onSubmit = (e) => {
            e.preventDefault()
            send('service_3lffwgd', 'template_586g6jd', toSend, 'zzIfBPDQ2Dak-rmND')
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
                setToSend(istate)
              })
              .catch((err) => {
                console.log('FAILED...', err)
              })
          }

          const handleChange = (e) => {
            setToSend({ ...toSend, [e.target.name]: e.target.value })
          }


console.log(toSend)




    return(
        <div>
            <Container fluid>
            <Row>
                
                <Col className='getintouch'>
                <h2 className='fill'><span className='aboutus2'>GET</span> IN TOUCH</h2>
                <p className='fill'>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                <br/>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Control type="text" placeholder="Name" value={toSend.from_name} onChange={handleChange} name='from_name' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
      
                            <Form.Control type="email" placeholder="Email" value={toSend.from_email} onChange={handleChange} name='from_email' />
                        </Form.Group>
            </Row>

                        <InputGroup size="lg">
    
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" className='mb-3' placeholder='Message' name="message" value={toSend.message} onChange={handleChange} />
                        </InputGroup>
                            <br/>
                            <Button className='submit' type="submit">Submit</Button>
                </Form>
                </Col>
               
                <Col>
                <h5 className='contact-info'>Contact Info</h5>
                <br/>
                <br/>
                <h6 className="fill"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> Address</h6>
<p className='fill'>12356 Developer St, Los Angeles, CA, 12345 </p>
<br/>
<h6 className='fill'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>  Phone</h6>
<p className="fill">1+ 123 456 7810</p>
<br/>
<h6 className='fill'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>   Email</h6>
<p className='fill'>info@email.com</p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default Contact;