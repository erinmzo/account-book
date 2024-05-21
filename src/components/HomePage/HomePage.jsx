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
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <InputAccount
            price={price}
            setPrice={setPrice}
            setAccountLists={setAccountLists}
            setClickedMonth={setClickedMonth}
          />
          <TabMonth
            setClickedMonth={setClickedMonth}
            clickedMonth={clickedMonth}
          />
          <GraphAccount />
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
