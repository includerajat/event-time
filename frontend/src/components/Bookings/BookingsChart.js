import React from "react";
import { Bar } from "react-chartjs";

const BOOKINGS_BUCKET = {
  Cheap: {
    min: 0,
    max: 100,
  },
  Normal: {
    min: 100,
    max: 200,
  },
  Expensive: {
    min: 200,
    max: 100000,
  },
};

const bookingsChart = (props) => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  for (const bucket in BOOKINGS_BUCKET) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price > BOOKINGS_BUCKET[bucket].min &&
        current.event.price < BOOKINGS_BUCKET[bucket].max
      ) {
        return prev + 1;
      }
      return prev;
    }, 0);
    values.push(filteredBookingsCount);
    chartData.labels.push(bucket);
    chartData.datasets.push({
      // label: 'My First Dataset',
      data: values,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
    });
    values = [...values];
    values[values.length - 1] = 0;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Bar data={chartData} />
    </div>
  );
};

export default bookingsChart;
