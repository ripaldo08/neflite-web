import {Button, Col, Container, Row} from "react-bootstrap"

function Intro() {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title text-center">NONTON GRATIS SEPUASNYA</div>
              <div className="title text-center">TANPA BAYAR</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Intro;