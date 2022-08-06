import styled from "styled-components";
import Analytics from "./analytics";
import TopAnalytics from "./topAnalytics";

function DashBoard() {
  return (
    <Wrapper>
      <TopAnalytics />
      <Analytics />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 49px;
  margin-left: 47px;
  padding-right: 50px;
  width: 100%;
  min-width: 1101px;
  max-width: 1101px;
  display: flex;
  flex-direction: column;
`;
export default DashBoard;
