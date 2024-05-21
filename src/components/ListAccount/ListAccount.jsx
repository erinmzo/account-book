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
          .price {
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

function ListAccount({ clickedMonth, accountLists }) {
  const monthlyList = accountLists.filter(
    (list) => list.month === clickedMonth
  );
  console.log(monthlyList);
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
                  <span className="price">{list.price}</span>
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
