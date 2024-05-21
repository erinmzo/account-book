import { RouterProvider } from "react-router-dom";
import FamilyProvider from "./FamliyProvider/FamilyProvider";
import GlobalStyle from "./GlobalStyle";
import router from "./routes/router";

function App() {
  return (
    <>
      <FamilyProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </FamilyProvider>
    </>
  );
}

export default App;
