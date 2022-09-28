import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './menu.css';
// import { useDispatch } from 'react-redux';



const Menu = () => {
    
    const [dishes,setDishes]=useState([]);

    // const dispatch = useDispatch
    // const send = (e) =>{
    //     console.log(e)

    // }

        fetch('http://localhost:3000/food-order/dishes.json').then(data => data.json()).then(dish => setDishes(dish));
    

    return (
        <div>
            
            <section className="bg-light py-4 my-5">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'black', fontFamily: 'cursive', fontStyle: 'italic', textAlign: 'center' }}>Delicious Burgers</h2>
                        {dishes.map(dish => (
                            <div id={dish.id} className="col-md-6 col-lg-4 burger">
                                <div className="card my-3">
                                    <img src={dish.pimg} className="img-fluid" alt="thumbnail" />
                                    <div className="card-body">
                                        <h4 className="card-title">{dish.name}</h4>
                                        <p className="card-text">{dish.desc}</p>
                                        <p>{dish.time}| Serves: 1</p>
                                        <span>${dish.price} <del>$10.70</del></span>
                                        <a href="#" className='btn btn-success'  >Add to cart</a>
                                        {/* onClick={()=> send(dish)} */}
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
