import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../homepage/homepage.css';
import img1 from '../homepage/img-1.png';
import img2 from '../homepage/img-2.png';

function HomePage() {
    return (
        <div>
            <Carousel >
                <Carousel.Item >
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1598514982901-ae62764ae75e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="First slide" />
                    <Carousel.Caption>
                        <a href="#" className="btn btn-primary">Order Starters</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" alt="Second slide" />
                    <Carousel.Caption>
                        <a href="#" className="btn btn-primary">Order MainCourse</a>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80" alt="Third slide" />
                    <Carousel.Caption>
                        <a href="#" className="btn btn-primary">Order Biryani</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1601387434127-20979856e76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                    <Carousel.Caption>
                        <a href="#" className="btn btn-primary">Order Roti's & Chapati's</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                    <Carousel.Caption>
                        <a href="#" className="btn btn-primary">Order Ice Creams</a>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <br /><br />
            <h4 style={{ textAlign: 'center', fontSize: '30px', fontStyle: 'italic', marginBottom: '10px' }}>Inspiration for your order</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ marginLeft: '100px' }}>
                <div className="col" style={{ width: '250px' }}>
                    <div className="card h-100">
                        <img style={{ height: '210px' }} src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pizza</h5>
                            <a href="#" className="btn btn-primary">Order Pizza</a>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '250px' }}>
                    <div className="card h-100">
                        <img style={{ height: '210px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIgSdLW3LENOBJZBesUe-cjCyWE_LFDXWaA&usqp=CAU" className="card-img-top"
                            alt="Snacks" />
                        <div className="card-body">
                            <h5 className="card-title">Burger</h5>
                            <a href="#" className="btn btn-primary">Order Burger</a>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '250px' }}>
                    <div className="card h-100">
                        <img style={{ height: '210px' }} src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" className="card-img-top"
                            alt="Fruits" />
                        <div className="card-body">
                            <h5 className="card-title">Sandwich</h5>
                            <a href="#" className="btn btn-primary">Order Sandwich</a>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '250px' }} >
                    <div className="card h-100">
                        <img style={{ height: '210px' }} src="https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Biryani</h5>
                            <a href="#" className="btn btn-primary">Order Biryani</a>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '250px' }}>
                    <div className="card h-100">
                        <img style={{ height: '210px' }} src="https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3NoYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Milk Shakes</h5>
                            <a href="#" className="btn btn-primary">Order Milk Shakes</a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <section id="about">
                <div className="about-section wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                                <div className="card border-0">
                                    <img src={img1} className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 text-sec">
                                <h2>We pride ourselves on making real food best ingredients.</h2>
                                <p>Food for us comes from our relatives, whether they have wings or fins or roots. That is how
                                    we consider food. Food has a culture. It has a history. It has a story. It has relationships
                                </p>
                                <button className="main-btn mt-4">Learn more</button>
                            </div>

                        </div>
                    </div>
                    <div className="container food-type">
                        <div className="row align-tems center">
                            <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                                <h2>We make everything by hand with best ingredients.</h2>
                                <p>
                                    We realized very early the power of food to evoke memory, to bring people together, to
                                    transport you to other places, and we wanted to be a part of that.
                                    Food for us comes from our relatives, whether they have wings or fins or roots. That is how
                                    we consider food. Food has a culture. It has a history. It has a story. It has
                                    relationships.
                                </p>
                                <ul className="list-unstyled py-3">
                                    <li>Let food be thy medicine and medicine be thy food</li>
                                    <li>Food is symbolic of love when words are inadequate</li>
                                    <li>One cannot think well, love well, sleep well, if one has not dined well</li>
                                </ul>
                                <button className="main-btn mt-4">Learn More</button>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="card border-0">
                                    <img src={img2} class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default HomePage;
