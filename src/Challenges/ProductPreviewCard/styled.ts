import styled from "styled-components";
import flaskDesktop from "./images/image-product-desktop.jpg";
import flaskMobile from "./images/image-product-mobile.jpg";

export const StyledDiv = styled.div`
  --main-bg-color: hsl(30, 38%, 92%);
  --text-grey-color: rgb(83, 79, 79);
  --border-radius-size: 7px;
  --green-color: rgb(61, 129, 104);

  .container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bg-color);
  }

  .image {
    height: 450px;
    width: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${flaskDesktop});
  }

  .text {
    height: 450px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-sizing: border-box;
    padding: 10px 20px 0;
  }

  .title {
    font-family: "Montserrat";
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(83, 79, 79);
  }

  .name {
    font-family: "Fraunces";
    font-weight: 700;
    font-size: 32px;
    margin: 0 0 10px 0;
  }

  .description {
    font-family: "Montserrat";
    line-height: 150%;
    font-weight: 500;
    color: var(--text-grey-color);
  }

  .footer {
    margin-top: auto;
    margin-bottom: 30px;
  }

  .prices {
    display: flex;
    align-items: center;
  }

  .new-price {
    color: var(--green-color);
    font-size: 34px;
    font-weight: 700;
    font-family: "Fraunces";
  }
  .old-price {
    margin-left: 20px;
    text-decoration: line-through;
    color: var(--text-grey-color);
  }

  .button {
    background-color: var(--green-color);
    margin-top: 10px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-size);
  }

  .icon {
    height: 15px;
  }

  .button-text {
    padding-left: 10px;
    font-family: "Fraunces";
    font-weight: 900;
    color: white;
    font-size: 14px;
  }

  @media only screen and (min-width: 601px) {
    .image {
      border-top-left-radius: var(--border-radius-size);
      border-bottom-left-radius: var(--border-radius-size);
    }
    .text {
      border-top-right-radius: var(--border-radius-size);
      border-bottom-right-radius: var(--border-radius-size);
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding: 20px;
      height: calc(100vh - 40px);
      flex-direction: column;
    }
    .image {
      border-top-left-radius: var(--border-radius-size);
      border-top-right-radius: var(--border-radius-size);
      width: calc(100vw - 40px);
      height: calc((100vw - 40px) * 0.7);
      background-image: url(${flaskMobile});
    }

    .text {
      border-bottom-left-radius: var(--border-radius-size);
      border-bottom-right-radius: var(--border-radius-size);
      height: calc(100vh - (100vw - 40px) * 0.7 - 40px);
      width: auto;
    }
  }
`;
