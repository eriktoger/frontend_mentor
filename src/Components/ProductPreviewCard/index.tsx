import Cart from "./images/icon-cart.svg";
import { StyledDiv } from "./styled";

const ProductPreviewCard = () => {
  return (
    <StyledDiv>
      <main className="container">
        <div className="image" />
        <div className="text">
          <p className="title">Perfume</p>
          <p className="name">Gabrielle Essence Eau De Parfum</p>
          <span className="description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </span>
          <div className="footer">
            <div className="prices">
              <span className="new-price">$149.99</span>
              <span className="old-price">$169.99</span>
            </div>
            <footer className="button">
              <img className="icon" src={Cart} alt="shopping-cart" />
              <span className="button-text">Add to Cart</span>
            </footer>
          </div>
        </div>
      </main>
    </StyledDiv>
  );
};

export default ProductPreviewCard;
