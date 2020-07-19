import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import cat from '../images/cat-doctor-crop.png'

import './Footer.css'

const style = {
    figure : {
        width: '300px',
        backgroundColor: 'white'
    },

    image : {
        maxWidth: '90%',
        maxHeight: '90%',
        boxShadow: '2px',
        borderRadius: '5px 5px 0 0',
        backgroundColor: 'white'
    },

    map : {
        width: '300px',
        height: '178px'
    },
}

function Footer(props) {
    return(
        <Container className="footy">
            <Row className="footer-one">
                <Col className="col-footy col-3" id="colu-1">
                <figure style={style.figure} className="alignnone">
                    <img style={style.image} src="https://i.pinimg.com/736x/b7/73/c3/b773c36a18df3a383b80532ccc7c6960.jpg" alt=""/>
                    <figcaption className="caption">
                        <strong>Dr. Mittens</strong><br/>
                        Professor of Cat Engineering <br/>
                        Dept. of Cat Engineering, CU<br/>
                        <a href="">drmittens@cu.edu</a>
                    </figcaption>
                </figure>
                </Col>
                <Col className="col-footy col-3">
                    <strong>VISITING ADDRESS</strong><br/><br/>
                    <strong>Olsen Research Group</strong><br/>
                    Massachusetts Institute of Technology <br/>
                    Department of Chemical Engineering<br/>
                    25 Ames Street<br/>
                    Room 66-558A<br/>
                    Cambridge, MA 02139<br/>
                </Col>
                <Col className="col-footy col-3">
                    <strong>GENERAL INQUIRIES</strong><br/><br/>
                    – Phone: (617)715-4548<br/>
                    – E-mail: bdolsen@mit.edu<br/>
                    – Accessibility<br/>
                </Col>
                <Col className="col-footy col-3">
                    <strong>MAP & DIRECTIONS TO OUR LAB</strong><br/><br/>
                    <a href="" target="_blank">
                        <img style={style.map} src="https://olsenlab.mit.edu/wp-content/uploads/sites/45/2018/06/building-66-map-1-300x178.jpg" alt="" />
                    </a>

                </Col>
            </Row>
            <Row className="footer-two">
                <p>© Arianna Leah Fischer</p>
            </Row>
        </Container> 
    )
}

export default Footer;