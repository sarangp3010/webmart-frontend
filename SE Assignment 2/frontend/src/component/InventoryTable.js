import React, { useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';

const data = [
  { id: 1, image: './image1.PNG', name: 'Product 1', quantity: 10 },
  { id: 2, image: './image2.PNG', name: 'Product 2', quantity: 5 },
  { id: 3, image: './image3.PNG', name: 'Product 3', quantity: 20 },
  // Add more data here as needed
];

const InventoryTable = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleModalShow}>
        Open Table
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Table</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Other</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Button>update</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InventoryTable;
