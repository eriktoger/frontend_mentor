import { StyledDiv } from "./styled";
import star from "../images/icon-star.svg";
import { Dispatch, useState } from "react";

const ratings = ["1", "2", "3", "4", "5"] as const;

const PickRating = ({
  setRating,
}: {
  setRating: Dispatch<React.SetStateAction<string>>;
}) => {
  const [currentRating, setCurrentRating] = useState<null | string>(null);

  function updateRating(id: string) {
    if (currentRating === id) {
      return;
    }
    setCurrentRating(id);
  }

  return (
    <StyledDiv>
      <div className="container">
        <img className="icon" src={star} alt="star" />
        <h1 className="title">How did we do?</h1>
        <h2 className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h2>
        <div className="rating-container">
          {ratings.map((rating) => (
            <span
              key={rating}
              onClick={() => updateRating(rating)}
              className={`rating ${rating === currentRating ? "active" : ""}`}
            >
              {rating}
            </span>
          ))}
        </div>
        <button className="button" onClick={() => setRating(currentRating)}>
          Submit
        </button>
      </div>
    </StyledDiv>
  );
};

export default PickRating;
