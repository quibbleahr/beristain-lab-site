import React from 'react';
import Container from 'react-bootstrap/Container';

import Title from '../components/Title';
import MenuBar from '../components/MenuBar';
import './HomePage.css'
import HomeGallery from '../components/HomeGallery';


function HomePage(props) {
    return(
        <div>
            <header className="header-stick">
                <Title title="Cat Labs" subtitle="BC Kitten's Hospital"/>
                <MenuBar headerLinks={props.headerLinks}/>
            </header>
            <div>
                <HomeGallery/>
            </div>
        </div>
    )
}

export default HomePage;