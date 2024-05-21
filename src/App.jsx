import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import DetailAccountPage from "./components/DetailAccountPage";
import HomePage from "./components/HomePage";

function App() {
  const [accountLists, setAccountLists] = useState([]);
  const [clickedMonth, setClickedMonth] = useState(1);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                clickedMonth={clickedMonth}
                setClickedMonth={setClickedMonth}
                accountLists={accountLists}
                setAccountLists={setAccountLists}
              />
            }
          />
          <Route
            path="/detail/:detailId"
            element={
              <DetailAccountPage
                accountLists={accountLists}
                setAccountLists={setAccountLists}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
