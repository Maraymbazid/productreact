import React from 'react';
import Nav from './nav';
import ImageGallery from './ImageGallery';
import About from './About';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Nav></Nav>
            <ImageGallery></ImageGallery>
            <About></About>
            <Footer></Footer>
        </>
    );
}

export default Home;