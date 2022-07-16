import InteractiveRating from "./Components/InteractiveRating";
import ProductPreviewCard from "./Components/ProductPreviewCard";
import QRCode from "./Components/QRCode";
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
  {
    path: "QRCode",
    title: "QR-Code",
    element: QRCode,
  },
] as const;
