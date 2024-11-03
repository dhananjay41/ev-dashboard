
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import {  Row, Col } from "react-bootstrap";


// Register necessary elements
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Charts({ data }) {
  const fuelTypes = data.reduce((acc, vehicle) => {
    acc[vehicle.fuelType] = (acc[vehicle.fuelType] || 0) + 1;
    return acc;
  }, {});

  const emissionsScores = data.map((vehicle) => vehicle.emissionsScore);

  const fuelTypeData = {
    labels: Object.keys(fuelTypes),
    datasets: [
      {
        label: "Fuel Types",
        data: Object.values(fuelTypes),
        backgroundColor: ["#42A5F5", "#66BB6A"],
      },
    ],
  };

  const emissionsData = {
    labels: data.map((vehicle) => `${vehicle.make} ${vehicle.model}`),
    datasets: [
      {
        label: "Emissions Score",
        data: emissionsScores,
        backgroundColor: "#FFA726",
      },
    ],
  };

  return (
    <div className="mb-3">
      <Row>
        <Col md={12} lg={6} className="chart-container">
          <h4>Fuel Type Distribution</h4>
          <Pie data={fuelTypeData}  responsive={true}  />
        </Col>
        <Col md={12} lg={6}>
          <h4 className="mt-5 mt-lg-0">Emissions Scores</h4>
          <Bar data={emissionsData} />
        </Col>
      </Row>
    </div>
  );
}

export default Charts;
