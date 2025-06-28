import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
function Pagination() {
    const[mydata, setmydata]=useState([]);

   useEffect(()=>{
    axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd").then(res=>{
        console.log(res.data);
        setmydata(res.data);
    })
  
   },[])


   

   


    const ans =mydata.map(key=>{
        return(
            <>
            <tr>
                <td>{key.serialId}</td>
                <td>{key.brandName}</td>
                <td>{key.color}</td>
                <td>{key.price}</td>
                <td>{key.productName}</td>
                <td>{key.size}</td>

            </tr>
            </>
        )
    })
  return (
    <>
    <h1 algin="center">Welcome to Pagination page</h1>


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>serialId</th>
          <th>brandName</th>
          <th>color</th>
          <th>price</th>
          <th>productName</th>
          <th>size</th>
        </tr>
      </thead>
      <tbody>
       {ans}
       </tbody>
       </Table>
       
    </>
  )
}

export default Pagination;