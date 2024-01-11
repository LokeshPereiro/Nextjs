import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description:
    "Choose the price that best suits you among those we have on offer.",
  keywords: ["price", "premium", "standard"],
};
export default function PricingPage() {
  return <h1 className="text-5xl">Pricing Page</h1>;
}
