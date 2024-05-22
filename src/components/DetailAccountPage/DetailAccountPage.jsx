import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { edit, remove } from "../../store/slices/accountSlice";

const Box = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-size: 13px;
      color: #666;
      margin-top: 10px;
    }
    input {
      padding: 7px 10px;
      font-size: 18px;
    }
  }
`;
const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 9px 10px;
    border: none;
    border-radius: 5px;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  & > button:nth-child(1) {
    background-color: #074abb;
  }
  & > button:nth-child(2) {
    background-color: #d45050;
  }
  & > button:nth-child(3) {
    background-color: #666;
  }
`;
function DetailAccount() {
  let { detailId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountLists = useSelector((state) => state.accountList.list);
  const { date, category, content, price, id } = accountLists.find((item) => {
    return item.id === detailId;
  });

  const [input, setInput] = useState({
    editDate: date,
    editCategory: category,
    editContent: content,
    editPrice: price,
  });

  const { editDate, editCategory, editContent, editPrice } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleEditAccount = () => {
    const editList = {
      id: id,
      date: editDate,
      category: editCategory,
      price: editPrice,
      content: editContent,
      month: Number(editDate.slice(5, 7)),
    };

    dispatch(edit(editList));
    navigate("/");
  };

  const handleDeleteAccount = () => {
    alert("삭제됩니다.");
    // const filteredList = accountLists.filter((list) => list.id !== detailId);
    dispatch(remove(id));
    navigate("/");
  };

  const handleBackPage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Box>
            <div>
              <label htmlFor="dateInput">날짜</label>
              <input
                id="dateInput"
                type="text"
                name="editDate"
                value={editDate}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="dateCategory">항목</label>
              <input
                id="dateCategory"
                type="text"
                name="editCategory"
                value={editCategory}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="dateContent">내용</label>
              <input
                id="dateContent"
                type="text"
                name="editContent"
                value={editContent}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="datePrice">금액</label>
              <input
                id="datePrice"
                type="text"
                name="editPrice"
                value={editPrice}
                onChange={onChange}
              />
            </div>
          </Box>
          <BtnBox>
            <button type="submit" onClick={handleEditAccount}>
              수정
            </button>
            <button onClick={handleDeleteAccount}>삭제</button>
            <button onClick={handleBackPage}>뒤로가기</button>
          </BtnBox>
        </div>
      </div>
    </>
  );
}

export default DetailAccount;
