import styled from "styled-components";
import pattern from "./images/pattern-background-desktop.svg";

interface Props {
  isMobile: boolean;
}

export const StyledWrapper = styled.div`
  font-family: "Red Hat Display";
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #e0e8ff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(p) => (p.isMobile ? "350px" : "380px")};
  height: ${(p) => (p.isMobile ? "560px" : "620px")};
  background-color: white;
  border-radius: 15px;
  justify-content: space-between;

  h1 {
    color: hsl(223, 47%, 23%);
    text-shadow: 0px 1px, 1px 0px, 1px 1px;
    font-size: ${(p) => (p.isMobile ? "22px" : "28px")};
    letter-spacing: 1px;
    margin: 0;
  }

  h2 {
    text-align: center;
    line-height: 150%;
    margin: 0 40px;
    font-size: 16px;
    color: #7a7c8b;
    font-weight: 700;
  }

  footer {
    margin-bottom: 40px;
    color: #8888a2;
    text-shadow: 0px 1px, 1px 0px, 1px 1px;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      color: hsl(223, 47%, 23%);
    }
  }
`;

export const StyledImage = styled.img<Props>`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: ${(p) => (p.isMobile ? "350px" : "380px")};
`;

export const StyledInfo = styled.div<Props>`
  display: flex;
  background-color: #f8f8ff;
  border-radius: 15px;
  width: ${(p) => (p.isMobile ? "calc(100% - 100px)" : "calc(100% - 110px)")};
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    line-height: 150%;
    margin-left: 20px;

    .title {
      color: hsl(223, 47%, 23%);
      text-shadow: 0px 1px, 1px 0px, 1px 1px;
      white-space: nowrap;
    }

    .price {
      color: #7a7c8b;
      font-weight: 900;
    }
  }

  .link {
    width: 100%;
    cursor: pointer;
    text-align: end;
    text-decoration: underline;
    justify-self: center;
    color: #635dc1;
    font-weight: 900;
    font-size: 14px;
    margin: auto;
    text-shadow: 0px 1px, 0px 0px, 0px 0px;

    &:hover {
      color: #766cf1;
      text-decoration: none;
    }
  }
`;

export const StyledButton = styled.button<Props>`
  font-family: "Red Hat Display";
  text-shadow: 0px 1px, 1px 0px, 1px 1px;
  letter-spacing: 1px;
  font-size: 14px;
  cursor: pointer;
  background-color: #382ae1;
  width: ${(p) => (p.isMobile ? "calc(100% - 60px)" : "calc(100% - 70px)")};
  height: 50px;
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: 0 20px 10px #e4e2fa;

  &:hover {
    background-color: #766cf1;
  }
`;
