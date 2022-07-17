import InteractiveRating from "./Components/InteractiveRating";
import ProductPreviewCard from "./Components/ProductPreviewCard";
import QRCode from "./Components/QRCode";
import NFTPreviewCard from "./Components/NFTPreviewCard";
import InteractiveRatingPreview from "./Components/Home/images/previews/interactive-rating.jpg";
import ProductPreviewCardPreview from "./Components/Home/images/previews/product-preview-card.jpg";
import QRCodePreview from "./Components/Home/images/previews/QR-code.jpg";
import NFTPreview from "./Components/Home/images/previews/NFT.jpg";

export const challenges = [
  {
    path: "interactiveRating",
    title: "Interactive Rating",
    element: InteractiveRating,
    difficulty: "Newbie",
    preview: InteractiveRatingPreview,
  },
  {
    path: "productPreviewCard",
    title: "Product Preview Card",
    element: ProductPreviewCard,
    difficulty: "Newbie",
    preview: ProductPreviewCardPreview,
  },
  {
    path: "QRCode",
    title: "QR-Code",
    element: QRCode,
    difficulty: "Newbie",
    preview: QRCodePreview,
  },
  {
    path: "NFTPreviewCard",
    title: "NFT Preview Card",
    element: NFTPreviewCard,
    difficulty: "Newbie",
    preview: NFTPreview,
  },
] as const;
