import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Pagination1 = () => {
  const [mydata, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;

  useEffect(() => {
    axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
      .then(res => {
        console.log(res.data);
        setMyData(res.data);
      });
  }, []);

  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  const currentItems = mydata.slice(firstItem, lastItem);
  const totalPage = Math.ceil(mydata.length / perPage);

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <>
      <h1>Welcome to Pagination Page</h1>
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

      <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
      <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPage}</span>
      <button onClick={nextPage} disabled={currentPage === totalPage}>Next</button>
    </>
  );
};

export default Pagination1;
