import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
    
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Income Distribution for a year"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;
