import styled from "styled-components";
import equilibrium from "./images/image-equilibrium.jpg";

export const StyledWrapper = styled.div`
  font-family: Outfit;
  background-color: #0c192c;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 350px;
  height: 590px;
  border-radius: 15px;
  flex-direction: column;
  background-color: #15273f;
  align-items: center;

  .mainImage {
    width: 310px;
    height: 310px;
    border-radius: 15px;
    background-size: 100%;
    background-image: url(${equilibrium});
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;

    .eye {
      display: none;
    }

    &:hover {
      background-image: linear-gradient(
          hsla(178, 100%, 50%, 50%),
          hsla(178, 100%, 50%, 50%)
        ),
        url(${equilibrium});

      .eye {
        display: inline;
      }
    }
  }

  .footer {
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  .title {
    font-weight: 900;
    font-size: 22px;
    color: white;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      color: ${(p) => p.theme.cyan};
    }
  }

  .text {
    color: ${(p) => p.theme.steelGrey};
    line-height: 150%;
    margin: 10px 0;
    font-size: 18px;
  }
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsla(215, 51%, 70%, 20%);
  padding-bottom: 20px;

  span {
    display: flex;
    align-items: center;
    height: 30px;
  }

  .cryptoText {
    font-weight: 900;
    color: ${(p) => p.theme.cyan};
  }

  .clockText {
    color: ${(p) => p.theme.steelGrey};
  }

  .cryptoIcon {
    height: 18px;
    width: 11px;
    margin-right: 5px;
  }

  .clockIcon {
    height: 17px;
    width: 17px;
    margin-right: 5px;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  height: auto;
  align-items: center;
  img {
    margin: 10px 10px 10px 0;
    height: 30px;
    border-width: 1px;
    border-radius: 50%;
    border-style: solid;
    border-color: white;
  }

  .text {
    color: ${(p) => p.theme.steelGrey};
    font-size: 16px;
    margin-left: 5px;
  }

  .author {
    font-size: 16px;
    color: white;
    cursor: pointer;
    &:hover {
      color: ${(p) => p.theme.cyan};
    }
  }
`;
