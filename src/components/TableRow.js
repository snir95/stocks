import React from "react";
const TableRow = ({ data }) => {
  const styles = {
    color: data.change < 0 ? "red" : "green",
  };
  return (
    <tr>
      <td>{data["symbol"]}</td>
      <td>{data["price"]}</td>
      <td style={styles}>{data["change"]}</td>
      <td style={styles}>{data["pct"]}</td>
    </tr>
  );
};
export default TableRow;
