import react from 'react'
import {Row, Col, Container, Image, Figure} from 'react-bootstrap'



const Testimonials = () => {

    
    return(
        <div>
            <Container className='angry-grid' fluid>
                <h1>TESTIMONIALS</h1>
                    <Row>
                        <Col>
                        <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://media.istockphoto.com/photos/portrait-of-a-young-man-outdoors-smiling-picture-id1135381173?k=20&m=1135381173&s=612x612&w=0&h=pZEZ7V-VbBOTSekv7rlKhjtQP5ZyxDQ3YDYN-dofHmk="
  />
  <Figure.Caption>  
      <p fluid className='review'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>

  </Figure.Caption>
</Figure>
    </Col>
    <Col>
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://media.istockphoto.com/photos/portrait-of-a-young-man-outdoors-smiling-picture-id1135381173?k=20&m=1135381173&s=612x612&w=0&h=pZEZ7V-VbBOTSekv7rlKhjtQP5ZyxDQ3YDYN-dofHmk="
  />
  <Figure.Caption>  
      <p fluid className='review'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>

  </Figure.Caption>
</Figure>
    </Col>
    </Row>



  
            </Container>
        </div>
    )
}


export default Testimonials