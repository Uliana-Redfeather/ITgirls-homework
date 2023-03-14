
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["food", "amount per day"],
  ["tea", 4],
  ["bun", 2],
  ["muesli", 3],
  ["sandwich", 1],
  ["bagel", 3],
];

export const options = {
  title: "Food I ate today",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}


export default App;
