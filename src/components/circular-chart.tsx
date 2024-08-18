'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChart = () => {
  const data = {
    labels: ['TetherUS', 'Australian Dollar', 'Others'],
    datasets: [
      {
        label: 'Allocation',
        data: [78.96, 21.04, 0.01],
        backgroundColor: ['#007BFF', '#85C1E9', '#FFD700'],
        hoverBackgroundColor: ['#0056b3', '#5DADE2', '#FFC300'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: '70%', // This makes it a donut chart
    plugins: {
      legend: {
        display: false, // Hide the legend if you don't want it
      },
    },
  };

  return (
      <div style={{ width: '200px', height: '200px' }}>
        <Doughnut data={data} options={options} />
      </div>
  );
};

export default CircularChart;
