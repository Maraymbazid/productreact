import React, { useState } from 'react';
import imageData from './data';
import SingleImage from './SingleImage'


const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showSingleImage, setShowSingleImage] = useState(false);
    const [selectedImageData, setSelectedImageData] = useState(null);

    const previousImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentIndex < imageData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const openSingleImage = () => {
        setSelectedImageData(imageData[currentIndex]);
        setShowSingleImage(true);
    };

    const closeSingleImage = () => {
        setShowSingleImage(false);
    };

    return (
        <>
            {
                showSingleImage ? (
                    <SingleImage
                        image={selectedImageData.url}
                        name={selectedImageData.name}
                        description={selectedImageData.description}
                        artist={selectedImageData.artist}
                        alt={selectedImageData.alt}

                    />
                ) : (
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={imageData[currentIndex].url} alt="First slide" />
                                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, 0.5)' }}>
                                    <div class="container">
                                        <div class="row justify-content-start" style={{ marginLeft: "25px" }}>
                                            <div class="col-10 col-lg-8">
                                                <h5 class="text-white text-uppercase mb-3 animated slideInDown">{imageData[currentIndex].name}</h5>
                                                <h1 class="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span class="text-primary">Art</span> {imageData[currentIndex].artist}</h1>
                                                <p class="fs-5 fw-medium text-white mb-4 pb-2">{imageData[currentIndex].description}.</p>
                                                <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" onClick={openSingleImage} href="#carouselExampleControls">Read More</a>
                                                <a href="/" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <a className="carousel-control-prev" onClick={previousImage} disabled={currentIndex === 0} href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" disabled={currentIndex === imageData.length - 1} onClick={nextImage} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                )}
        </>
    );
};

export default ImageGallery;
