import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Sorting() {
    const [mydata, setMydata] = useState([]);
    const [sortKey, setSortKey] = useState('serialId');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
            .then(res => {
                setMydata(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleSort = (e) => {
        e.preventDefault();

        const sortedData = [...mydata].sort((a, b) => {
            if (typeof a[sortKey] === 'number') {
                return sortOrder === 'asc' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
            } else {
                return sortOrder === 'asc'
                    ? String(a[sortKey]).localeCompare(String(b[sortKey]))
                    : String(b[sortKey]).localeCompare(String(a[sortKey]));
            }
        });

        setMydata(sortedData);
    };

    return (
        <>
            <h1 align="center">Sort Data Using Form</h1>

            <Form onSubmit={handleSort} style={{ marginBottom: "20px", padding: "0 20px" }}>
                <Form.Group controlId="sortKey" style={{ marginBottom: "10px" }}>
                    <Form.Label>Select Column to Sort</Form.Label>
                    <Form.Control as="select" value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
                        <option value="serialId">serialId</option>
                        <option value="brandName">brandName</option>
                        <option value="color">color</option>
                        <option value="price">price</option>
                        <option value="productName">productName</option>
                        <option value="size">size</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="sortOrder" style={{ marginBottom: "10px" }}>
                    <Form.Label>Select Order</Form.Label>
                    <Form.Control as="select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Sort</Button>
            </Form>

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
                    {mydata.map((item, index) => (
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
        </>
    );
}

export default Sorting;
