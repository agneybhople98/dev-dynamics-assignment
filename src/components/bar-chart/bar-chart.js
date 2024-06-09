// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ chartData }) => {
  const labels = chartData[0]?.date;

  const datasets = chartData[0]?.items?.children?.map((item) => ({
    label: item?.label,
    backgroundColor: item?.fillColor,
    data: item?.count,
  }));

  const data = {
    labels: labels,
    datasets: datasets,
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="md:w-full w-[400px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
