import React, { act, useEffect } from "react";
import BarChart from "../bar-chart/bar-chart";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityData = ({ data }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-12 md:grid-cols-2">
      <div className="lg:col-span-6 md:col-span-1">
        <Card>
          <CardContent>
            <DayWiseActivity dayWiseActivity={data.dayWiseActivity} />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-6 md:col-span-1">
        <div className="flex items-center">
          <Card>
            <CardContent>
              <TotalActivity totalActivity={data.totalActivity} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const TotalActivity = ({ totalActivity }) => {
  const labels = totalActivity.map((item) => item.name);
  const dataValues = totalActivity.map((item) => parseInt(item.value, 10));

  const data = {
    labels,
    datasets: [
      {
        label: "Values",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(199, 199, 199, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Activity Data",
      },
    },
  };

  return (
    <div className="mt-4">
      <Pie data={data} options={options} />
    </div>
  );
};

const DayWiseActivity = ({ dayWiseActivity }) => {
  console.log("🚀 ~ DayWiseActivity ~ dayWiseActivity:", dayWiseActivity);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredData, setFilteredData] = useState(dayWiseActivity);

  const isDataValid = Array.isArray(filteredData) && filteredData.length > 0;

  useEffect(() => {
    if (selectedDate) {
      const filtered = dayWiseActivity.filter(
        (item) => item.date === selectedDate
      );

      setFilteredData(filtered);
    } else {
      setFilteredData(0);
    }
  }, [selectedDate, dayWiseActivity]);

  const handleDateChange = (newValue) => {
    if (newValue && dayjs(newValue).isValid()) {
      const formattedDate = dayjs(newValue).format("YYYY-MM-DD");
      setSelectedDate(formattedDate);

      console.log("Selected date:", formattedDate);
    } else {
      console.log("Invalid date selected");
    }
  };

  return (
    <div className="">
      <div className="flex justify-end mb-3">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Please pick a date"
            value={selectedDate ? dayjs(selectedDate) : null}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      {isDataValid ? (
        <BarChart chartData={filteredData} />
      ) : (
        <div className="flex h-[300px] justify-center items-center">
          Please choose a date to start with 6th May,2024 OR 7th May,2024
        </div>
      )}
    </div>
  );
};

export default ActivityData;
