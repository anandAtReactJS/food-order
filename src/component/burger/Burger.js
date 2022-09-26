import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../burger/burger.css';


const Burger = () => {
    const [burgers,setBurgers]=useState([]);

    fetch('http://localhost:3000/food-order/burger.json').then(data=>data.json()).then(burger=>setBurgers(burger));

  return (
    <div>
       <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                            <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Delicious Burgers</h2>
                        {burgers.map(burger => (
                            <div id={burgers.id} className="col-md-6 col-lg-4 burger">
                                <div className="card my-3">
                                        <img src={burger.pimg} className="img-fluid" alt="thumbnail" />
                                    <div className="card-body">
                                        <h3 className="card-title">{burger.name}</h3>
                                        <p className="card-text">{burger.desc}</p>
                                        <p>{burger.time}| Serves: 1</p>
                                        <span>${burger.price} <del>$10.70</del></span>
                                        <a href="#">Add to cart</a>
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

export default Burger
