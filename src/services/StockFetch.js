const StockFetch = (str) => {
  let num = 0;
  if (str === "price") {
    num = Math.random(1, 1000) * 100;
  } else if (str === "change") {
    num = Math.random(1, 1000) * 10;
    num *= Math.round(Math.random()) ? 1 : -1;
  } else if (str === "pct") {
    num = Math.random(1, 1000);
    num *= Math.round(Math.random()) ? 1 : -1;
  }
  console.log(num);

  return num.toFixed(2);
};
export default StockFetch;
