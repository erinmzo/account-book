import { useState } from "react";

const useReset = () => {
  const [values, setValue] = useState("");
  const handler = (e) => {
    const { name } = e.target;
    console.log(name);
    setValue({
      [name]: "",
    });
  };
  return [values, handler];
};
export default useReset;
