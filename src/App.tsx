import React, { useEffect, useState } from "react";
import Receipt from "./components/Receipt";
import { fetchRandomReceipt } from "./helpers";

function App() {
  const [receipt, setReceipt] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchRandomReceipt();
        setReceipt(result);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
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
