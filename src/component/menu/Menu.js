import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './menu.css';



const Menu = () => {
    const [burgers, setBurgers] = useState([]);
    const [pizzas,setPizzas]=useState([]);
    const [noodles,setNoodles]=useState([]);

        fetch('http://localhost:3000/food-order/burger.json').then(data => data.json()).then(burger => setBurgers(burger));
        fetch('http://localhost:3000/food-order/pizza.json').then(data=>data.json()).then(pizza=>setPizzas(pizza));
        fetch('http://localhost:3000/food-order/Noodles.json').then(data=>data.json()).then(noodle=>setNoodles(noodle));

    

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
                                        <h4 className="card-title">{burger.name}</h4>
                                        <p className="card-text">{burger.desc}</p>
                                        <p>{burger.time}| Serves: 1</p>
                                        <span>${burger.price} <del>$10.70</del></span>
                                        <a href="#" className='btn btn-success' >Add to cart</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Get Pizza's in 30 Mins.</h2>
                        {pizzas.map(pizza => (
                            <div id={pizzas.id} className="col-md-6 col-lg-4 burger">
                                <div className="card my-3">
                                    <img src={pizza.pimg} className="img-fluid" alt="thumbnail" />
                                    <div className="card-body">
                                        <h4 className="card-title">{pizza.name}</h4>
                                        <p className="card-text">{pizza.desc}</p>
                                        <p>{pizza.time}| Serves: 1</p>
                                        <span>${pizza.price} <del>$10.70</del></span>
                                        <a href="#" className='btn btn-success'>Add to cart</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Chinese Option's</h2>
                        {noodles.map(noodle => (
                            <div id={noodles.id} className="col-md-6 col-lg-4 burger">
                                <div className="card my-3">
                                    <img src={noodle.pimg} className="img-fluid" alt="thumbnail" />
                                    <div className="card-body">
                                        <h4 className="card-title">{noodle.name}</h4>
                                        <p className="card-text">{noodle.desc}</p>
                                        <p>{noodle.time}| Serves: 1</p>
                                        <span>${noodle.price} <del>$10.70</del></span>
                                        <a href="#" className='btn btn-success'>Add to cart</a>
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
