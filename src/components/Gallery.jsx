import react from 'react'

import {Container, Card, Row, Col} from 'react-bootstrap'

let giglist = [
    {  title: 'Church Parking lot',
    img: 'https://www.espinapaving.com/wp-content/uploads/2014/05/Asphalt-Maintenance-for-Churches.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
    {
        title: 'Driveway',
        img: 'https://i.imgur.com/0XkDtGW.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Sealcoating',
        img: 'https://i.imgur.com/uhYhzr1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Big House Driveway',
        img: 'https://i.imgur.com/MFWeXTP.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]



export default function Gallery() {
  return (
      <div>
          <Container fluid>
              <h1 className='aboutus2'>OUR WORK</h1>
          <Row xs={1} md={2} className="g-4">
  {giglist.map((gig) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={gig.img} />
        <Card.Body>
          <Card.Title>{gig.title}</Card.Title>
          <Card.Text>
            {gig.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>



          </Container>
      </div>
  )}

