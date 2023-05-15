import React, { useEffect, useState } from "react";
import StockTable from "./StockTable";

const MainScreen = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>Parent Component</h1>
      {<StockTable key={key} />}
    </div>
  );
};

export default MainScreen;
