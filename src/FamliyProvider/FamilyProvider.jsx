import { useState } from "react";
import { FamilyProps } from "../context/Context";

function FamilyProvider({ children }) {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState(0);
  const [accountLists, setAccountLists] = useState([]);
  const [clickedMonth, setClickedMonth] = useState(1);
  return (
    <FamilyProps.Provider
      value={{
        price,
        setPrice,
        amount,
        setAmount,
        accountLists,
        setAccountLists,
        clickedMonth,
        setClickedMonth,
      }}
    >
      {children}
    </FamilyProps.Provider>
  );
}

export default FamilyProvider;
