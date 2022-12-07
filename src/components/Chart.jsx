import { useContext, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { TransactionContext } from "../context/TransactionContext";

const COLORS = ["#00C49F", "#E0144C"];

const Chart = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  // get all the positive amount
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  // get all the negative amount
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <PieChart width={800} height={180}>
      <Pie
        data={data}
        cx={120}
        cy={75}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
