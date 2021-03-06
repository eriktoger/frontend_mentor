import styled from "styled-components";
import { StyledWrapper } from "../StyledWrapper";

export const StyledDiv = styled(StyledWrapper)`
  .container {
    background-color: var(--darkGrey);
    padding: 30px;
    border-radius: 20px;
    width: 365px;
    height: 365px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .icon {
    background-color: var(--lightGrey);
    border-radius: 50%;
    padding: 10px;
    height: 20px;
    width: 20px;
  }
  .title {
    color: hsl(0, 0%, 100%);
    font-size: 24px;
    font-family: "Overpass";
    font-weight: 700;
    margin: 0;
  }
  .text {
    color: darkgrey;
    font-size: 14px;
    font-weight: 400;
    line-height: 180%;
    margin: 0;
    margin-top: -25px;
  }

  .rating-container {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  .rating {
    font-size: 18px;
    background-color: hsl(216, 12%, 54%);
    border-radius: 50%;
    padding: 10px 15px;
    cursor: pointer;
    opacity: 0.3;
    color: white;
  }

  .active {
    background-color: hsl(217, 12%, 63%);
    opacity: 1;
  }

  .rating:hover {
    background-color: var(--orange) !important;
    opacity: 1 !important;
  }

  .button {
    cursor: pointer;
    background-color: var(--orange);
    width: 100%;
    height: 45px;
    border-radius: 25px;
    font-size: 18px;
    color: white !important;
    border: none;
  }
  .button:hover {
    background-color: white !important;
    color: var(--orange) !important;
  }
`;
