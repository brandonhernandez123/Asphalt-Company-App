import react from 'react'
import {Row, Col, Container, Image, Figure, Stack} from 'react-bootstrap'
import { Avatar } from '@mui/material'



const Testimonials = () => {

    
    return(
        <div>
            <Container className='angry-grid' fluid>
                <h1>TESTIMONIALS</h1>
                    <Row>
                        <Col>
                        <Stack direction="horizontal" gap={3}>
  <div>
  <Avatar
  alt="Remy Sharp"
  src="https://media.istockphoto.com/photos/portrait-of-a-young-man-outdoors-smiling-picture-id1135381173?k=20&m=1135381173&s=612x612&w=0&h=pZEZ7V-VbBOTSekv7rlKhjtQP5ZyxDQ3YDYN-dofHmk="
  sx={{ width: 56, height: 56 }}
/>

  </div>
  <div className=" ms-auto">      <p fluid className='review'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."" <span className='owner'>- John Doe</span></p>
</div>
  <div className="vr" />
  
</Stack>
    </Col>
    <Col>
    <Stack direction="horizontal" gap={3}>
  <div>
  <Avatar
  alt="Remy Sharp"
  src="https://media.istockphoto.com/photos/portrait-of-a-young-man-outdoors-smiling-picture-id1135381173?k=20&m=1135381173&s=612x612&w=0&h=pZEZ7V-VbBOTSekv7rlKhjtQP5ZyxDQ3YDYN-dofHmk="
  sx={{ width: 56, height: 56 }}
/>

  </div>
  <div className=" ms-auto">      <p fluid className='review'>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."" <span className='owner'>- John Doe</span></p>
</div>
  <div className="vr" />
  
</Stack>
   
    </Col>
    </Row>



  
            </Container>
        </div>
    )
}


export default Testimonials