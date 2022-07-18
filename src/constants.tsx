import {
  InteractiveRating,
  ProductPreviewCard,
  QRCode,
  NFTPreviewCard,
  OrderSummary,
} from "./Challenges";
import {
  InteractiveRatingPreview,
  ProductPreviewCardPreview,
  QRCodePreview,
  NFTPreview,
  OrderSummaryPreview,
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
  {
    path: "OrderSummary",
    title: "Order Summary",
    element: OrderSummary,
    difficulty: "Newbie",
    preview: OrderSummaryPreview,
  },
] as const;
