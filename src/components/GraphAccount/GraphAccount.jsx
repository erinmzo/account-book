import { useContext } from "react";
import styled from "styled-components";
import { FamilyProps } from "../../context/Context";

const StGraphbox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
`;
function GraphAccount() {
  const { amount } = useContext(FamilyProps);
  return <StGraphbox>총 사용한 금액은 {amount}원 입니다.</StGraphbox>;
}

export default GraphAccount;
