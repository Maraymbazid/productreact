import React from 'react';
import Header from './headers/Header';
import Slider from './sliders/Slider';
import Product from './products/Product';
import Saving from './savingsections/SavingSection';
import Footer from './footer/Footer';

function Home() {
    return (
        <>
            <div className="hero_area">
                <Header></Header>
                <Slider></Slider>
            </div>
            <Product></Product>
            <Saving></Saving>
            <Footer></Footer>

        </>
    );
}

export default Home;
