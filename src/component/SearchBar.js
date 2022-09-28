import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SearchBar = () => {

    const[data,setData] = useState([])
    const[query,setQuery] = useState("")

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get("http://localhost:3000/food-order/dishes.json")
                console.log(data.results);
                setData(response.data);

            }catch(error){
                console.log(error)
            }
        };
        fetchData();
    },[])

    // const handleFilter = (event) => {
    //     event.preventDefault();
    //     const search = event.target.value
    //     .toLowerCase()
    //     .normalize("NDF")
    //     .replace(/[u0300-u036f]/g)
    //     setQuery(search)
    // }


  return (

    <>
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder='Search...'   />
            </div>

            { query.length  != 0 && (
                <div className="dataResult">
                    {data.results.map((product, index) => {
                        return(
                            <a href="" className="dataItem" key={product._id}> {product.name}</a>
                        )
                    })}
                </div>
            )}
            </div></>
  )
}

export default SearchBar