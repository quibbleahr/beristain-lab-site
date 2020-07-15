import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Title.css';
import Socials from './Socials';

function Title(props) {
    return(
        <div className="title">
          <Container fluid={true}>
              <Row>
                  <Col md={9} sm={12}>
                      <h1>{props.name}</h1>
                      <h4>BC Children's Hospital</h4>
                  </Col>
                  <Col md={3} sm={12} className="d-flex align-items-center justify-content-end"><Socials/></Col>
              </Row>
          </Container>
        </div>
    );
}

export default Title;