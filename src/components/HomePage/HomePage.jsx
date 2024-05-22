import { useState } from "react";
import GraphAccount from "../GraphAccount";
import InputAccount from "../InputAccount";
import ListAccount from "../ListAccount";
import TabMonth from "../TabMonth";

function HomePage() {
  const [amount, setAmount] = useState("0");
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <InputAccount setAmount={setAmount} />
          <TabMonth />
          <GraphAccount amount={amount} />
          <ListAccount />
        </div>
      </div>
    </>
  );
}

export default HomePage;
