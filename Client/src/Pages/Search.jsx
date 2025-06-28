import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Search() {
  const [mydata, setMyData] = useState([]);
  const [search, setSearch] = useState('');
  const [hcolor, sethColor] = useState("");

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
 

  const filteredData = mydata.filter((item) => {
    const matchesSearch =
      item.productName.toLowerCase().includes(search.toLowerCase()) ||
      item.brandName.toLowerCase().includes(search.toLowerCase()) ||
      item.color.toLowerCase().includes(search.toLowerCase());

    const matchesColor = hcolor ? item.color.toLowerCase() === hcolor.toLowerCase() : true;

    return matchesSearch && matchesColor;
  });
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
        <select
  value={hcolor}
  onChange={e => sethColor(e.target.value)}
  className="mb-3"
>
  <option value="">Filter by Color</option>
  <option value="red">Red</option>
  <option value="black">Black</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>

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
