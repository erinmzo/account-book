import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useInputChange from "../../hooks/useInputChange";
import { add } from "../../store/slices/accountSlice";
import { set } from "../../store/slices/monthSlice";
import Inputs from "../Inputs";
const StInputBox = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    label {
      font-size: 13px;
      color: #666;
      margin-bottom: 7px;
    }
    input {
      padding: 7px 10px;
    }
    button {
      padding: 9px 10px;
      background-color: #0046ff;
      border: none;
      border-radius: 5px;
      color: white;
      opacity: 0.8;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
function InputAccount() {
  const dispatch = useDispatch();

  const {
    values: input,
    handler: onChangeInput,
    reset: onReset,
  } = useInputChange({
    date: "",
    category: "",
    content: "",
    price: "",
  });
  const { date, category, content, price } = input;

  const validate = () => {
    if (!date.trim() || !category.trim() || !content.trim() || !price.trim()) {
      alert("모든 항목을 입력해주세요.");
      return false;
    }

    const dateReg = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!dateReg.test(date)) {
      alert("YYYY-MM-DD 형식을 맞춰주세요.");
      return false;
    }

    const numbReg = /^[1-9][0-9]*$/;
    if (!numbReg.test(price)) {
      alert("0으로 시작하지 않는 숫자만 넣어주세요");
      return false;
    }
    return true;
  };

  const submitAccount = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    const newList = {
      date,
      category,
      price: Number(price),
      content,
      //YYYY-MM-DD에서 MM을 추출한것
      month: Number(date.slice(5, 7)),
      id: uuidv4(),
    };

    dispatch(add(newList));
    onReset();
    dispatch(set(newList.month));
  };

  return (
    <StInputBox onSubmit={submitAccount}>
      <Inputs onChangeInput={onChangeInput} input={input} />
      <div>
        <button>저장</button>
      </div>
    </StInputBox>
  );
}

export default InputAccount;
