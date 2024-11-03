


import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

function EVTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current data to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle next and previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate pagination items
  const paginationItems = [];
  for (let page = 1; page <= totalPages; page++) {
    paginationItems.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>VIN</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Fuel Type</th>
            <th>Battery Range (mi)</th>
            <th>Emissions Score</th>
            <th>City</th>
            <th>ZIP Code</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.vin}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.modelYear}</td>
              <td>{vehicle.fuelType}</td>
              <td>{vehicle.batteryRange}</td>
              <td>{vehicle.emissionsScore}</td>
              <td>{vehicle.city}</td>
              <td>{vehicle.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />
        {paginationItems}
        <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages} />
      </Pagination>
    </>
  );
}

export default EVTable;
