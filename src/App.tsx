import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import InteractiveRating from "./Components/InteractiveRating";
import ProductPreviewCard from "./Components/ProductPreviewCard";

const App = () => {
  return (
    <Routes>
      <Route path="interactiveRating" element={<InteractiveRating />} />
      <Route path="productPreviewCard" element={<ProductPreviewCard />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
