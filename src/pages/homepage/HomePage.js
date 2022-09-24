import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../homepage/homepage.css';
import img1 from '../homepage/img-1.png';
import img2 from '../homepage/img-2.png';
import 'font-awesome/css/font-awesome.min.css';

function HomePage() {
    return (
        <div>
            <Carousel >
                <Carousel.Item >
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1598514982901-ae62764ae75e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="First slide" />
                    <Carousel.Caption>
                        <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontStyle: 'italic' }}>Starters</h2>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" alt="Second slide" />
                    <Carousel.Caption>
                        <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontStyle: 'italic' }}>Main Course</h2>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80" alt="Third slide" />
                    <Carousel.Caption>
                        <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontStyle: 'italic' }}>Biryani</h2>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1601387434127-20979856e76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                    <Carousel.Caption>
                        <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontStyle: 'italic' }}>Indian Breads</h2>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" style={{ height: '450px' }} src="https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                    <Carousel.Caption>
                        <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontStyle: 'italic' }}>Ice Creams</h2>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <br /><br />
            <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Explore Foodies Menu</h2>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card my-3">
                                <div className="card-thumbnail">
                                    <img src="https://images.unsplash.com/photo-1559067933-0293effe6133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Burgers</h3>
                                    <p className="card-text">We make everything by hand with best ingredients.</p>
                                    <p>Time: 25-30 Minutes | Serves: 1</p>
                                    <span>$9.20 <del>$10.70</del></span>
                                    <a href="#" className="btn btn-danger">Order Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card my-3">
                                <div className="card-thumbnail">
                                    <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Pizza</h3>
                                    <p className="card-text">We make everything by hand with best ingredients.</p>
                                    <p>Time: 25-30 Minutes | Serves: 1</p>
                                    <span>$9.20 <del>$10.70</del></span>
                                    <a href="#" className="btn btn-danger">Order Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card my-3">
                                <div className="card-thumbnail">
                                    <img src="https://images.unsplash.com/photo-1436327266874-c2e4e1ac7a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNoaW5lc2UlMjAlMjBmb29kfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Chinese Cusine</h3>
                                    <p className="card-text">We make everything by hand with best ingredients.</p>
                                    <p>Time: 25-30 Minutes | Serves: 1</p>
                                    <span>$9.20 <del>$10.70</del></span>
                                    <a href="#" className="btn btn-danger">Order Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card my-3">
                                <div className="card-thumbnail">
                                    <img src="https://images.unsplash.com/photo-1526401281623-279b498f10f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Coffee</h3>
                                    <p className="card-text">We make everything by hand with best ingredients.</p>
                                    <p>Time: 25-30 Minutes | Serves: 1</p>
                                    <span>$9.20 <del>$10.70</del></span>
                                    <a href="#" className="btn btn-danger">Order Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card my-3">
                                <div className="card-thumbnail">
                                    <img src="https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlsa3NoYWtlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">MilkShakes</h3>
                                    <p className="card-text">We make everything by hand with best ingredients.</p>
                                    <p>Time: 25-30 Minutes | Serves: 1</p>
                                    <span>$9.20 <del>$10.70</del></span>
                                    <a href="#" className="btn btn-danger">Order Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card my-3">
                                <div className="card-thumbnail">
                                    <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title"><a href="#" className="text-secondary">Where does it come from?</a></h3>
                                    <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it</p>
                                    <a href="#" className="btn btn-danger">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
