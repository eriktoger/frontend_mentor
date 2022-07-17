import InteractiveRating from "./Challenges/InteractiveRating";
import ProductPreviewCard from "./Challenges/ProductPreviewCard";
import QRCode from "./Challenges/QRCode";
import NFTPreviewCard from "./Challenges/NFTPreviewCard";
import InteractiveRatingPreview from "./Challenges/Home/images/previews/interactive-rating.jpg";
import ProductPreviewCardPreview from "./Challenges/Home/images/previews/product-preview-card.jpg";
import QRCodePreview from "./Challenges/Home/images/previews/QR-code.jpg";
import NFTPreview from "./Challenges/Home/images/previews/NFT.jpg";

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
