import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { DLT, ADD, REMOVE } from '../Redux/actions/action'

const ItemDetails = () => {

    const [data, setData] = useState([]);
    // console.log(data)

    const { id } = useParams();
    // console.log(id)

    const history = useNavigate();

    const dispatch = useDispatch();
    const getdata = useSelector((state) => state.cartReducer.carts);
    // console.log(getdata)

    const compare = () => {
        let comparedata = getdata.filter((dish) => {
            return dish.id == id
        })
        setData(comparedata)
    }

    const send = (dish) => {
        // console.log(e);
        dispatch(ADD(dish));

    }

    const dlt = (id) => {
        dispatch(DLT(id));
        history("/")
    }
    const remove = (item) => {
        dispatch(REMOVE(item))
    }
    useEffect(() => {
        compare();
    }, [id])
    return (
        <>
            <div className="container mt-3 ">

                <h2 className="text-center">Items Detail Page</h2>

                <section className="container mt-3" >
                    <div className="iteamsdetails justify-content-center d-flex align-items-center " style={{ boxShadow: " 0 0 5px 2px rgba(0, 0, 0, 0.082)", width: "800px" , margin:'auto' , marginTop:'60px'}}>
                     {
                            data.map((dish) => {
                                return (
                                    <>
                                        <div className="items_img">
                                            <img src={dish.pimg} style={{marginRight:'80px',height:'250px',width:'250px'}} alt="" /></div>
                                        <div className="details mt-3">
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p><strong>Name:</strong> {dish.name} </p>
                                                        <p><strong>Price:</strong>{dish.price}</p>

                                                        <p><strong>Total:</strong>{dish.price * dish.qnty} </p>

                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                            <span style={{ fontSize: 24 }} onClick={dish.qnty <= 1 ? () => dlt(dish.id) : () => remove(dish)}>-</span>
                                                            <span style={{ fontSize: 22 }}>{dish.qnty}</span>
                                                            <span style={{ fontSize: 24 }} onClick={() => send(dish)}>+</span>

                                                        </div>
                                                    </td>
                                                    <td>

                                                        <p><strong>Remove:</strong> <span><i className='fas fa-trash' onClick={() => dlt(dish.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </>
    )
}

export default ItemDetails