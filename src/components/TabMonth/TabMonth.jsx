import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { set } from "../../store/slices/monthSlice";

const StTabBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$active ? "#0046ff" : "#eee")};
  padding: 30px 0;
  border-radius: 7px;
  color: ${(props) => (props.$active ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background-color: #0046ff;
    color: white;
  }
`;

function TabMonth() {
  const clickedMonth = useSelector((state) => state.clickedMonth.month);
  const dispatch = useDispatch();
  const months = [];
  for (let i = 0; i < 12; i++) {
    months[i] = i + 1;
  }
  const handleMonthTab = (month) => {
    dispatch(set(month));
  };

  return (
    <StTabBox>
      <ul>
        {months.map((month) => {
          return (
            <Li
              key={month}
              $active={month === clickedMonth}
              onClick={() => {
                handleMonthTab(month);
              }}
            >
              {month}월
            </Li>
          );
        })}
      </ul>
    </StTabBox>
  );
}

export default TabMonth;
