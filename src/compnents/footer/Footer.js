import React from 'react';

function Footer() {
    return (
        <>
            <section class="gift_section layout_padding-bottom">
                <div class="box ">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="img_container">
                                    <div class="img-box">
                                        <img src="images/gifts.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="detail-box">
                                    <div class="heading_container">
                                        <h2>
                                            Gifts for your <br />
                                            loved ones
                                        </h2>
                                    </div>
                                    <p>
                                        Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                                    </p>
                                    <div class="btn-box">
                                        <a href="/" class="btn1">
                                            Buy Now
                                        </a>
                                        <a href="/" class="btn2">
                                            See More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact_section ">
                <div class="container px-0">
                    <div class="heading_container ">
                        <h2 class="">
                            Contact Us
                        </h2>
                    </div>
                </div>
                <div class="container container-bg">
                    <div class="row">
                        <div class="col-lg-7 col-md-6 px-0">
                            <div class="map_container">
                                <div class="map-responsive">
                                    <iframe title="Example Website" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{ border: 0, width: '100%', height: '100%' }} allowfullscreen ></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5 px-0">
                            <form action="#">
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone" />
                                </div>
                                <div>
                                    <input type="text" class="message-box" placeholder="Message" />
                                </div>
                                <div class="d-flex ">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="client_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Testimonial
                        </h2>
                    </div>
                </div>
                <div class="container px-0">
                    <div id="customCarousel2" class="carousel  carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="box">
                                    <div class="client_info">
                                        <div class="client_name">
                                            <h5>
                                                Morijorch
                                            </h5>
                                            <h6>
                                                Default model text
                                            </h6>
                                        </div>
                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="box">
                                    <div class="client_info">
                                        <div class="client_name">
                                            <h5>
                                                Rochak
                                            </h5>
                                            <h6>
                                                Default model text
                                            </h6>
                                        </div>
                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="box">
                                    <div class="client_info">
                                        <div class="client_name">
                                            <h5>
                                                Brad Johns
                                            </h5>
                                            <h6>
                                                Default model text
                                            </h6>
                                        </div>
                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel_btn-box">
                            <a class="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="info_section  layout_padding2-top">
                <div class="social_container">
                    <div class="social_box">
                        <a href="/">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="/">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="/">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="/">
                            <i class="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="info_container ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-3">
                                <h6>
                                    ABOUT US
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="info_form ">
                                    <h5>
                                        Newsletter
                                    </h5>
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email" />
                                        <button>
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <h6>
                                    NEED HELP
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <h6>
                                    CONTACT US
                                </h6>
                                <div class="info_link-box">
                                    <a href="/">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span> Gb road 123 london Uk </span>
                                    </a>
                                    <a href="/">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>+01 12345678901</span>
                                    </a>
                                    <a href="/">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span> demo@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class=" footer_section">
                    <div class="container">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <a href="https://html.design/">Free Html Templates</a>
                        </p>
                    </div>
                </footer>


            </section>
        </>
    );
}

export default Footer;