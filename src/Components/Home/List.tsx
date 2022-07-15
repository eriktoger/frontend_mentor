import { Link } from "react-router-dom";
import { challanges } from "../../constants";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const StyledLi = styled.li`
  font-size: 1.5rem;
  list-style-position: inside;
`;

const List = () => {
  return (
    <StyledList>
      {challanges.map(({ path, title }) => (
        <StyledLi key={title}>
          <Link to={path}>{title}</Link>
        </StyledLi>
      ))}
    </StyledList>
  );
};

export default List;
