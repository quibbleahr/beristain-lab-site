import React from 'react';
import Container from 'react-bootstrap/Container';

import Title from '../components/Title';
import MenuBar from '../components/MenuBar';
import './HomePage.css'
import HomeGallery from '../components/HomeGallery';
import Footer from '../components/Footer';

const pStyle = {
    fontSize: '16pt',
    padding: '40px 100px 40px 100px'
};

function HomePage(props) {
    return(
        <div>
            <header className="header-stick">
                <Title title="Cat Labs" subtitle="BC Kitten's Hospital"/>
                <MenuBar headerLinks={props.headerLinks}/>
            </header>
            <div className="container">
                <HomeGallery/>
            </div>
            <Container>
                <p style={pStyle}>
                <b>The Olsen Lab</b> focuses on engineering new biofunctional and bioinspired materials and understanding the novel polymer physics required to control the nanoscale structure and properties of these complex systems.  To do this, we apply cutting-edge polymer chemistry and protein engineering to synthesize new materials at the interface of biology and the physical sciences.  To intelligently design such systems, we investigate the relationships between molecular structure and self-assembly, applying concepts from block copolymer assembly and polymer gels to understand complex biohybrid materials.  Our efforts are aimed at applying biological components or biological design principles to dramatically extend the capability of soft materials such as engineering plastics, energy converters, catalysts, and biomedical hydrogels.  Through the study of natural polymer systems, we also hope to produce a new sustainable source of functional polymers.
                </p>
            </Container>
            <footer><Footer/></footer>
        </div>
    )
}

export default HomePage;