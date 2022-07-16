import styled from "styled-components";
import qrCode from "./images/image-qr-code.png";

const StyledDiv = styled.div`
  --white: hsl(0, 0%, 100%);
  --lightGray: hsl(212, 45%, 89%);
  --grayishBlue: hsl(220, 15%, 55%);
  --darkBlue: hsl(218, 44%, 22%);
  --lightblue: #d5e1ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--lightblue);
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: auto;
    width: 270px;
    padding: 20px;
    padding-bottom: 0;
    border-radius: 15px;
  }
  h1 {
    text-align: center;
    font-size: 22px;
    font-family: "Outfit";
    padding: 5px;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    font-family: "Outfit";
    padding: 0 5px 25px;
    margin-top: 0;
    font-weight: 400;
    color: #9597a3;
  }

  img {
    border-radius: 15px;
    height: 270px;
    width: 270px;
  }
`;

const QRCode = () => {
  return (
    <StyledDiv>
      <div className="container">
        <img src={qrCode} alt="QR-code" />
        <h1>Improve your front-end skills by building projects</h1>
        <h2>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </StyledDiv>
  );
};

export default QRCode;
