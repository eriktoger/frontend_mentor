import styled from "styled-components";
import { StyledWrapper } from "../StyledWrapper";

export const StyledDiv = styled(StyledWrapper)`
  .container {
    background-color: var(--darkGrey);
    padding: 30px;
    border-radius: 20px;
    width: 365px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 365px;
  }

  .rating {
    color: var(--orange);
    background-color: var(--lightGrey);
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
  }

  .icon {
    padding: 10px;
  }

  .message {
    color: white;
    font-size: 24px;
    font-weight: 700;
  }

  .text {
    color: darkgrey;
    font-size: 14px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;
  }
`;
