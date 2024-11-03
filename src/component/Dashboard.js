import React from "react";
import { Container } from "react-bootstrap";
import EVTable from "./EVTable";
import Charts from "./Charts";
import { evData } from "../data";


function Dashboard() {
  return (
    <Container fluid className="container">
      <h1 className="my-4">Electric Vehicle Population Dashboard</h1>
      <Charts data={evData} />

      <EVTable data={evData} />

    </Container>
  );
}

export default Dashboard;
