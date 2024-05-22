import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  const accountLists = useSelector((state) => state.accountList.list);
  const clickedMonth = useSelector((state) => state.clickedMonth.month);
  const monthlyList = accountLists.filter(
    (item) => item.month === clickedMonth
  );
  return (
    <StListBox>
      <ul>
        {monthlyList.map((month) => {
          return (
            <li key={month.id}>
              <Link to={`/detail/${month.id}`}>
                <span className="date">{month.date}</span>
                <div>
                  <span className="title">
                    {month.category} - {month.content}
                  </span>
                  <span className="price">{month.price}원</span>
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
