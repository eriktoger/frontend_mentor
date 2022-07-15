import InteractiveRating from "./Components/InteractiveRating";
import ProductPreviewCard from "./Components/ProductPreviewCard";
export const challanges = [
  {
    path: "interactiveRating",
    title: "Interactive Rating",
    element: InteractiveRating,
  },
  {
    path: "productPreviewCard",
    title: "Product Preview Card",
    element: ProductPreviewCard,
  },
] as const;
