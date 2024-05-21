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
  const { date, category, content, price, id } = accountLists.find((list) => {
    return list.id === detailId;
  });

  const [editDate, setEditDate] = useState(date);
  const [editCategory, setEditCategory] = useState(category);
  const [editContent, setEditContent] = useState(content);
  const [editPrice, setEditPrice] = useState(price);

  const handleEditDate = (e) => {
    setEditDate(e.target.value);
  };
  const handleEditCategory = (e) => {
    setEditCategory(e.target.value);
  };
  const handleEditContent = (e) => {
    setEditContent(e.target.value);
  };
  const handleEditPrice = (e) => {
    setEditPrice(e.target.value);
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
                value={editDate}
                onChange={handleEditDate}
              />
            </div>
            <div>
              <label htmlFor="dateInput">항목</label>
              <input
                id="dateInput"
                type="text"
                value={editCategory}
                onChange={handleEditCategory}
              />
            </div>
            <div>
              <label htmlFor="dateInput">내용</label>
              <input
                id="dateInput"
                type="text"
                value={editContent}
                onChange={handleEditContent}
              />
            </div>
            <div>
              <label htmlFor="dateInput">금액</label>
              <input
                id="dateInput"
                type="text"
                value={editPrice}
                onChange={handleEditPrice}
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
