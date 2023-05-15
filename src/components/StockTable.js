import React from "react";
import StockFetch from "../services/StockFetch";
import TableRow from "./TableRow";

const StockTable = () => {
  console.log("yeayea");
  const data = [
    {
      IBMData: {
        symbol: "IBM",
        price: StockFetch("price"),
        change: StockFetch("change"),
        pct: StockFetch("pct"),
      },
    },
    {
      TSLAData: {
        symbol: "TSLA",
        price: StockFetch("price"),
        change: StockFetch("change"),
        pct: StockFetch("pct"),
      },
    },
    {
      AAPLData: {
        symbol: "AAPL",
        price: StockFetch("price"),
        change: StockFetch("change"),
        pct: StockFetch("pct"),
      },
    },
    {
      AMZNData: {
        symbol: "AMZN",
        price: StockFetch("price"),
        change: StockFetch("change"),
        pct: StockFetch("pct"),
      },
    },
    {
      FBData: {
        symbol: "FB",
        price: StockFetch("price"),
        change: StockFetch("change"),
        pct: StockFetch("pct"),
      },
    },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change</th>
          <th>Change %</th>
        </tr>
      </thead>
      <tbody>
        <TableRow data={data[0].IBMData} />
        <TableRow data={data[1].TSLAData} />
        <TableRow data={data[2].AAPLData} />
        <TableRow data={data[3].AMZNData} />
        <TableRow data={data[4].FBData} />
      </tbody>
    </table>
  );
};

export default StockTable;
