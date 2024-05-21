import { useState } from "react";
import GraphAccount from "../GraphAccount";
import InputAccount from "../InputAccount";
import ListAccount from "../ListAccount";
import TabMonth from "../TabMonth";

function HomePage({
  accountLists,
  setAccountLists,
  clickedMonth,
  setClickedMonth,
}) {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <InputAccount
            price={price}
            setPrice={setPrice}
            setAccountLists={setAccountLists}
            setClickedMonth={setClickedMonth}
            setAmount={setAmount}
          />
          <TabMonth
            setClickedMonth={setClickedMonth}
            clickedMonth={clickedMonth}
          />
          <GraphAccount amount={amount} />
          <ListAccount
            accountLists={accountLists}
            clickedMonth={clickedMonth}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
