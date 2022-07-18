import hero from "./images/illustration-hero.svg";
import note from "./images/icon-music.svg";
import {
  StyledButton,
  StyledContainer,
  StyledImage,
  StyledInfo,
  StyledWrapper,
} from "./styled";
import { useIsMobile } from "../../hooks";

const OrderSummary = () => {
  const isMobile = useIsMobile();
  return (
    <StyledWrapper>
      <StyledContainer isMobile={isMobile}>
        <StyledImage isMobile={isMobile} src={hero} alt="dancer" />
        <h1>Order Summary</h1>
        <h2>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </h2>
        <StyledInfo isMobile={isMobile}>
          <img src={note} alt="music" />
          <div>
            <span className="title">Annual Plan</span>
            <span className="price">$59.99/year</span>
          </div>
          <a className="link">Change</a>
        </StyledInfo>
        <StyledButton isMobile={isMobile}>Proceed to Payment</StyledButton>
        <footer>Cancel Order</footer>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default OrderSummary;
