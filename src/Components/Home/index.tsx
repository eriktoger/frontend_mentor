import styled from "styled-components";
import List from "./List";
import tree from "./images/tree.jpg";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${tree});
  background-position: center;
`;

const Container = styled.div`
  background-color: hsla(200, 100%, 91%, 60%);
  border-radius: 15px;
  margin: 20px;
`;

const StyledP = styled.p`
  font-size: 2.2rem;
  padding-left: 10px;
  margin-bottom: 0;
  text-decoration: underline;
`;

const Home = () => {
  return (
    <StyledDiv>
      <Container>
        <StyledP>Challenges</StyledP>
        <List />
      </Container>
    </StyledDiv>
  );
};

export default Home;
