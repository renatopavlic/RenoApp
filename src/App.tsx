import React, { useEffect, useState } from "react";
import Receipt from "./components/Receipt";
import { fetchRandomReceipt } from "./helpers";

function App() {
  const [receipt, setReceipt] = useState<any>([]);

  /* const getRandomReceipt = async () => {
    const randomReceipt = await fetchRandomReceipt();
    setReceipt(randomReceipt);
    return;
  }; */
  useEffect(() => {
    try {
      const fetchReceipt = async () => {
        const result = await fetchRandomReceipt();
        setReceipt(result);
      };

      fetchReceipt();
      //getRandomReceipt();
    } catch (error) {}
  }, []);

  console.log("receipt", receipt);
  console.log("conosle from app");

  return (
    <div className="App">
      <h2>Oh shit, here we go again</h2>
      <Receipt receipt={receipt} />
    </div>
  );
}

export default App;
