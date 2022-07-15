import { StyledDiv } from "./styled";
import thankYou from "../images/illustration-thank-you.svg";
const Thanks = ({ rating }: { rating: string }) => {
  return (
    <StyledDiv>
      <div className="container">
        <img className="icon" src={thankYou} alt="Thanks!" />
        <div className="rating" id="rating">
          You selected {rating} out of 5
        </div>
        <div className="message">Thank you!</div>
        <div className="text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </StyledDiv>
  );
};

export default Thanks;
