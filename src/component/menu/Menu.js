import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './menu.css';



const Menu = () => {

    const [dishes, setDishes] = useState([]);

        fetch('http://localhost:3000/food-order/dishes.json').then(data => data.json()).then(dish => setDishes(dish));
        console.log('Fetch products');

    return (
        <div>

            <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Our Menu</h2>
                        <div>
                            <form className="d-flex ms-auto">
                                <input type="text" className="form-control me-sm-2" placeholder="Search Burger,Pizza's & Chinese dishes"/>
                            </form>
                            <br />
                        </div>
                        {dishes.map(dish => (
                            <div id={dish.id} className="col-md-6 col-lg-4 burger">
                                <div className="card my-3">
                                    <img src={dish.pimg} className="img-fluid" alt="thumbnail" />
                                    <div className="card-body">
                                        <h4 className="card-title">{dish.name}</h4>
                                        <p className="card-text">{dish.desc}</p>
                                        <p>{dish.time}| Serves: 1</p>
                                        <span>${dish.price} <del>$10.70</del></span>
                                        <a href="#" className='btn btn-success' >Add to cart</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu
