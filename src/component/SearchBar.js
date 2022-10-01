// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const SearchBar = () => {

//     const[data,setData] = useState([])
//     const[query,setQuery] = useState("")

//     useEffect(() => {
//         const fetchData = async() => {
//             try{
//                 const response = await axios.get("http://localhost:3000/food-order/dishes.json")
//                 // console.log(data.results);
//                 setData(response.data);

//             }catch(error){
//                 console.log(error)
//             }
//         };
//         fetchData();
//     },[])

//     const handleFilter = (event) => {
//         event.preventDefault();
//         const search = event.target.value
//         .toLowerCase()
        
        
//         setQuery(search)
//     }


//   return (

//     <>
//     <div className="search">
//         <div className="searchInputs d-flex">
//             <input type="text" placeholder='Search...'  onChange={handleFilter} />
//             <div className="searchIcon ">
            
//                 <i class="fa-solid fa-magnifying-glass m-2 searchIcon" style={{color:"white"}}></i>
//                 </div>
            
//             </div>

//             { query.length  != 0 && (
//                 <div className="dataResult">
//                     {data.results.map((product, index) => {
//                         return(
//                             <a href="" className="dataItem" key={index}> {product.name}</a>
//                         )
//                     })}
//                 </div>
//             )}
//             </div></>
//   )
// }

// export default SearchBar




// import React, { useState } from 'react';
// import Data from '../component/Data.json'

// const SearchBar = () => {
//     const[query,setQuery] = useState("")
//   return (
//     <div>
//         <input type="text" placeholder='Search...' onChange={event => setQuery(event.target.value)}/>
//         {
//             Data.filter(post => {
//                 if(query === ''){
//                     return post;

//                 }else if(post.title.toLowerCase().includes(query.toLowerCase())){
//                     return post;
//                 }
//             }).map((post, index) => (
//                 <div key={index}>
//                     <p> {post.name} </p>
//                 </div>
//             ))
//         }
//     </div>
    
//   )
// }

// export default SearchBar

import React, { useState } from 'react'
import Data from '../component/Data.json'
import './SearchBar.css'

const SearchBar = ({data}) => {
    const[filterData,setFilterData] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = Data.filter((value) => {
            return  value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilterData(newFilter)
    }
  return (
    
    <>
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder='Seach...' onChange={handleFilter} />

        </div>
        {filterData.length != 0 && (
            <div className="dataResult">
                {filterData.map((value, key) => {
                    return (
                        <a href="" className='dataItem' target="_blank">
                            <p>{value.name}</p>
                        </a>
                    )
                })}
            </div>
        )}
    </div>
    </>
  )
}

export default SearchBar