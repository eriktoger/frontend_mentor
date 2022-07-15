import PickRating from "./PickRating";
import { useState } from "react";
import Thanks from "./Thanks";

const InteractiveRating = () => {
  const [rating, setRating] = useState("");
  return rating ? (
    <Thanks rating={rating} />
  ) : (
    <PickRating setRating={setRating} />
  );
};

export default InteractiveRating;
