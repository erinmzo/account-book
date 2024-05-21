import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FamilyProps } from "../../context/Context";
const StListBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 3px solid #eee;
    padding: 10px;
    border-radius: 7px;

    li {
      a {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 3px;
        background-color: white;
        font-size: 18px;
        &:hover {
          background-color: #dee7ff;
        }
        div {
          display: flex;
          justify-content: space-between;
          .title {
            max-width: 600px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .price {
            max-width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #0046ff;
            font-weight: 500;
          }
        }
        .date {
          font-size: 13px;
          color: #666;
        }
      }
    }
  }
`;

function ListAccount() {
  const { clickedMonth, accountLists } = useContext(FamilyProps);
  const monthlyList = accountLists.filter(
    (list) => list.month === clickedMonth
  );
  return (
    <StListBox>
      <ul>
        {monthlyList.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`/detail/${list.id}`}>
                <span className="date">{list.date}</span>
                <div>
                  <span className="title">
                    {list.category} - {list.content}
                  </span>
                  <span className="price">{list.price}원</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </StListBox>
  );
}

export default ListAccount;
