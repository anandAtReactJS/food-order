// import React from 'react'
// import { useSelector } from 'react-redux'
// // import { useSelector } from 'react-redux'
// // import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// // import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// const Cart = () => {

//   // const getdata = useSelector.
//   const getdata = useSelector((state) => state.cartReducer.carts)

//   return (
//     <>
//     {
//       getdata.length ?

//     <section className='main-cart'>
//       <h1>Cart Items</h1>
//     {
//       getdata.map((dish) =>{
//         return(
//         <>
//       <div className="cart-items">
//         <div className="cart-item-container ">
//           <div className="item-info d-flex justify-content-between m-5">

//             <div className="prod img">
//               <img src="https://b.zmtcdn.com/data/pictures/chains/5/61555/b9cda61d3277a30e0fa2a12153ba0925.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="image" />
//             </div>

//             <div className="title">
//               <h2>Crispy Veg Patty Burger</h2>
//               <p>Our Best-Selling Burger With Crispy Veg Patty</p>
//             </div>

//             <div className="quantity">
//               <i class="fas fa-minus minus"></i>
//               <input className='inputt align-item-center m-1' type="text" placeholder='2' style={{width:40}}  />
//               <i class="fas fa-plus plus"></i>
//             </div>

//             <div className="price">
//               <h3>5.20$</h3>
//             </div>

//             <div className="remove-item" >
//               <i class="fas fa-trash-alt remove" style={{fontSize:30, color:"red"}}></i>

//             </div>



//           </div>

//           <hr  />

//         </div>

//       </div>
//       </>
//       )
// })
// }


//       <div className="card-total ">
//         <h3 className='total float-end'>total: <span>22220 $</span></h3>
//       </div> 




//     </section>:
//     <div className="empty_cart">your cartis empty</div>
// }

//     </>

//   )
// }
// export default Cart

import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/esm/Table';

const Cart = () => {
    const getdata = useSelector((state) => state.cartReducer.carts)
    console.log(getdata);
    return (
        <>
                      {/*  getdata.length */ }
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((dish)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        
                                                        <img src={dish.pimg} style={{width:"5rem",height:"5rem"}} alt="" />
                                                         
                                                        </td>
                                                        <td>
                                                            <p>{dish.name}</p>
                                                            <p>Price : ₹{dish.price}</p>  
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })}
                                    <p className='text-center'>Total :₹ </p>
                                </tbody>
                            </Table>
                        </div>
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    
                    <p style={{fontSize:22}}>Your cart is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
            
        </>
    )
}

export default Cart