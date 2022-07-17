import { ThemeProvider } from "styled-components";
import { avatar, clock, ethereum, eye } from "./images";
import {
  StyledContainer,
  StyledFooter,
  StyledIconsContainer,
  StyledInfo,
  StyledWrapper,
} from "./styled";

const theme = {
  cyan: "hsl(178, 100%, 50%)",
  steelGrey: "hsl(215, 51%, 70%)",
};

const NFTPreviewCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledContainer>
          <div className="mainImage">
            <img className="eye" src={eye} alt="eye" />
          </div>
          <StyledInfo>
            <h1 className="title">Equilibrium #3429</h1>
            <span className="text">
              Our Equilibrium collection promotes balance and calm.
            </span>
            <StyledIconsContainer>
              <span>
                <img className="cryptoIcon" src={ethereum} alt="ethereum" />
                <span className="cryptoText">0.041 ETH</span>
              </span>
              <span>
                <img className="clockIcon" src={clock} alt="clock" />{" "}
                <span className="clockText">3 days left</span>
              </span>
            </StyledIconsContainer>
            <StyledFooter>
              <img src={avatar} alt="avatar" />
              <span className="text">
                Creation of <span className="author">Jules Wyvern</span>
              </span>
            </StyledFooter>
          </StyledInfo>
        </StyledContainer>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default NFTPreviewCard;
