import React, { act, useEffect } from "react";
import BarChart from "../bar-chart/bar-chart";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityData = ({ data }) => {
  console.log("🚀 ~ ActivityData ~ data:", data.dayWiseActivity);

  return (
    <div className="flex flex-col">
      <DayWiseActivity dayWiseActivity={data.dayWiseActivity} />

      <TotalActivity totalActivity={data.totalActivity} />
      {/* <ul>
        {data.map((activity, index) => (
          <TotalActivity totalActivity={activity.totalActivity} />
        ))}
      </ul>
      <div>
        {data.map((activity, index) => (
          <DayWiseActivity dayWiseActivity={activity.dayWiseActivity} />
        ))}
      </div>
      <div>
        {data.map((activity, index) => (
          <ActiveDays activeDays={activity.activeDays} />
        ))}
      </div> */}
    </div>
  );
};

const TotalActivity = ({ totalActivity }) => {
  console.log("🚀 ~ TotalActivity ~ totalActivity:", totalActivity);

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
        display: true,
        text: "Activity Data",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

const DayWiseActivity = ({ dayWiseActivity }) => {
  console.log("🚀 ~ DayWiseActivity ~ dayWiseActivity:", dayWiseActivity);
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredData, setFilteredData] = useState(dayWiseActivity);

  useEffect(() => {
    if (selectedDate) {
      alert(selectedDate);
      const filtered = dayWiseActivity.filter(
        (item) => item.date === selectedDate
      );
      console.log("FILTERED DATA", filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(dayWiseActivity);
    }
  }, [selectedDate, dayWiseActivity]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="">
      <div className="flex">
        <div>{dayWiseActivity.date}</div>
        <div>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
      </div>
      <BarChart chartData={filteredData} />
    </div>
  );
};

// const ActiveDays = ({ activeDays }) => {
//   return (
//     <div className="border">
//       <h2>Active Days</h2>
//       <p>Days: {activeDays.days}</p>
//       <p>Burnout: {activeDays.isBurnOut ? "Yes" : "No"}</p>
//       {activeDays.insight.length > 0 && (
//         <ul>
//           {activeDays.insight.map((insight, index) => (
//             <li key={index}>{insight}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

export default ActivityData;
