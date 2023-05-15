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
// const StockFetch = async () => {
//   const apiKey = "ZL1PIP024P2JHYM1";

//   try {
//     const response = await axios.get("API_ENDPOINT_URL", {
//       params: {
//         apiKey,
//         limit: 5,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching - ", error);
//   }
// };

export default StockFetch;
