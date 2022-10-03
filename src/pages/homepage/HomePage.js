import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../homepage/homepage.css';
import img1 from '../homepage/img-1.png';
import img2 from '../homepage/img-2.png';
import 'font-awesome/css/font-awesome.min.css';

function HomePage() {

    const [menu, setMenu] = useState([]);

    fetch('http://localhost:3001/food-order/menu.json').then(data => data.json()).then(menu => setMenu(menu));

    return (
        <div>
            <Carousel >
                <Carousel.Item >
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1598514982901-ae62764ae75e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" alt="Second slide" />
                </Carousel.Item>


                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80" alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1601387434127-20979856e76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                </Carousel.Item>

            </Carousel>
            <br /><br />

            <br /><br />
            <section id="about">
                <div className="about-section wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                                <div className="card border-0">
                                    <img src={img1} className="img-fluid" />
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
                                    <img src={img2} class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section id="story">
                <div className="story-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-content">
                                    <h2>The main facts in human life are five: birth, food, sleep, love and death</h2>
                                    <p>Food is strength, and food is peace, and food is freedom, and food is a helping hand to
                                        people around the world whose good will and friendship we want
                                    </p>
                                    <button className="main-btn mt-3">Read more</button>
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
