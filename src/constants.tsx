import {
  InteractiveRating,
  ProductPreviewCard,
  QRCode,
  NFTPreviewCard,
} from "./Challenges";
import {
  InteractiveRatingPreview,
  ProductPreviewCardPreview,
  QRCodePreview,
  NFTPreview,
} from "./Challenges/previews";

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
