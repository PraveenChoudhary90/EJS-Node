import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Search() {
  const [mydata, setMyData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd').then((res) => {
      console.log(res.data);
      setMyData(res.data);
    });
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
 

  // Adjust field to search by productName (or change as needed)
  const filteredData = mydata.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase())||
    item.brandName.toLowerCase().includes(search.toLowerCase())
    
  );
  return (
    <>
      <h1 align="center">Welcome to Home page</h1>
      <form>
        Search by product name, brand, color:
        <input
          type="text"
          name="search"
          placeholder="Search by product name , brand, color"
          value={search}
          onChange={handleInput}
       />
      </form>

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
          {filteredData.map((item) => (
            <tr key={item.serialId}>
              <td>{item.serialId}</td>
              <td>{item.brandName}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.productName}</td>
              <td>{item.size}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Search;
