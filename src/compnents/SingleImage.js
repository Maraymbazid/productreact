import React from 'react';

function SingleImage({ image, name, description, alt, artist }) {

    return (
        <>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image} alt={alt} />
                        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, 0.5)' }}>
                            <div class="container">
                                <div class="row justify-content-start" style={{ marginLeft: "25px" }}>
                                    <div class="col-10 col-lg-8">
                                        <h5 class="text-white text-uppercase mb-3 animated slideInDown">{name}</h5>
                                        <h1 class="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span class="text-primary">Art</span> {artist}</h1>
                                        <p class="fs-5 fw-medium text-white mb-4 pb-2">{description}.</p>
                                        <a href="/" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href="/" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>


    );

}

export default SingleImage;