import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Checkout how we are and our values",
  keywords: ["aboutus", "history", "values"],
};
export default function AboutPage() {
  return <span className="text-5xl">About Page</span>;
}
