import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './menu.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../../Redux/actions/action';



const Menu = () => {

    const [dishes, setDishes] = useState([]);

    const dispatch = useDispatch();


    
    const send = (dish) =>{
        // console.log(dish)
        dispatch(ADD(dish));

    }

        fetch('http://localhost:3000/food-order/dishes.json').then(data => data.json()).then(dish => setDishes(dish));
        console.log('Fetch products');

    return (
        <div>

            <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Our Menu</h2>
                        {dishes.map(dish => (
                            <div id={dish.id} className="col-md-6 col-lg-4 burger">
                                <div className="card my-3">
                                    <img src={dish.pimg} className="img-fluid" alt="thumbnail" />
                                    <div className="card-body">
                                        <h4 className="card-title">{dish.name}</h4>
                                        <p className="card-text">{dish.desc}</p>
                                        <p>{dish.time}| Serves: 1</p>
                                        <span>${dish.price} <del>$10.70</del></span>
                                       
                                        <button className='btn btn-success' onClick={() =>send(dish)} >Add to cart</button>
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

