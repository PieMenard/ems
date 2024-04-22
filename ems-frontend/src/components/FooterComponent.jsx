import { Container, Row, Col } from 'react-bootstrap'

const FooterComponent = () => {
  return (
    <footer>
        <Container >
            <Row className='bg-secondary-subtle'>
                <Col className='text-center py-3'>
                    goose &copy; 2023
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default FooterComponent