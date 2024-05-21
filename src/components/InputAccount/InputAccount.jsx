import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
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
function InputAccount({ setAccountLists, price, setPrice, setClickedMonth }) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleCategroyChange = (e) => {
    setCategory(e.target.value);
  };
  const handelPriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const validation = () => {
    if (!date || !category || !content || !price) {
      return alert("모든 항목을 입력해주세요.");
    }

    const dateReg = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!dateReg.test(date)) {
      return alert("YYYY-MM-DD 형식을 맞춰주세요.");
    }

    const numbReg = /^[1-9][0-9]*$/;
    if (!numbReg.test(price)) {
      return alert("0으로 시작하지 않는 숫자만 넣어주세요");
    }
  };

  const submitAccount = (e) => {
    e.preventDefault();
    validation();
    const newList = {
      date,
      category,
      price,
      content,
      month: Number(date.slice(5, 7)),
      id: uuidv4(),
    };
    setAccountLists((prev) => [...prev, { ...newList }]);
    setDate("");
    setCategory("");
    setPrice("");
    setContent("");
    setClickedMonth(newList.month);
  };

  return (
    <StInputBox onSubmit={submitAccount}>
      <div>
        <label htmlFor="inputDate">날짜</label>
        <input
          type="text"
          id="inputDate"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="inputCategory">항목</label>
        <input
          type="text"
          id="inputCategory"
          placeholder="지출 항목"
          value={category}
          onChange={handleCategroyChange}
        />
      </div>
      <div>
        <label htmlFor="inputPrice">금액</label>
        <input
          type="text"
          id="inputPrice"
          placeholder="지출 금액"
          value={price}
          onChange={handelPriceChange}
        />
      </div>
      <div>
        <label htmlFor="inpuContent">내용</label>
        <input
          type="text"
          id="inputContent"
          placeholder="지출 내용"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <button>저장</button>
      </div>
    </StInputBox>
  );
}

export default InputAccount;
