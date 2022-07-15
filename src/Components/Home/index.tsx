import styled from "styled-components";
import List from "./List";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #03254c;
`;
const Container = styled.div`
  background-color: #d0efff;
  border-radius: 15px;
  margin: 20px;
`;

const StyledP = styled.p`
  font-size: 2.2rem;
  padding: 10px;
`;

const Home = () => {
  return (
    <StyledDiv>
      <Container>
        <StyledP>Pick a Frontend Mentor Challange from the list:</StyledP>
        <List />
      </Container>
    </StyledDiv>
  );
};

export default Home;
