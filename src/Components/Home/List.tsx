import { Link } from "react-router-dom";
import { challenges } from "../../constants";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  isMobile: boolean;
}

type Challenge = typeof challenges[number];

const CardList = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
  max-height: 300px;
  overflow: scroll;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  :not(:last-child) {
    border-bottom: 2px solid #152f4944;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 60%;

  .title {
    font-weight: 900;
  }
`;

const ImgContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = ({ challenge }: { challenge: Challenge }) => {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(challenge.path)}>
      <CardText>
        <span className="title">{challenge.title}</span>
        <span>Difficulty: {challenge.difficulty}</span>
      </CardText>
      <ImgContainer>
        <img src={challenge.preview} style={{ height: 100 }} />
      </ImgContainer>
    </CardContainer>
  );
};

const getIsMobile = () => innerWidth < 720;

const List = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const resizing = () => setIsMobile(getIsMobile());

  useEffect(() => {
    addEventListener("resize", resizing);
    return () => removeEventListener("resize", resizing);
  }, []);

  return (
    <CardList isMobile={isMobile}>
      {challenges.map((challenge) => (
        <Card key={challenge.title} challenge={challenge} />
      ))}
    </CardList>
  );
};

export default List;
