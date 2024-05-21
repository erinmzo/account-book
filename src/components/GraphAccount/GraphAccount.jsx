import styled from "styled-components";

const StGraphbox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
function GraphAccount({ amount }) {
  return <StGraphbox>총 사용한 금액은 {amount}원 입니다.</StGraphbox>;
}

export default GraphAccount;
