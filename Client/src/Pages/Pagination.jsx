import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';

function Pagination() {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
      .then(res => {
        setMydata(res.data);
      })
      .catch(err => {
        console.log("Error fetching data:", err);
      });
  }, []);

  // Calculate pagination indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mydata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mydata.length / itemsPerPage);

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <>
      <h1 align="center">Welcome to Pagination Page</h1>

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
          {currentItems.map((item, index) => (
            <tr key={index}>
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

      {/* Pagination buttons */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
