import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "How to get in touch with us",
  keywords: ["contact", "getintouch", "phone", "email"],
};
export default function ContactPage() {
  return <h1 className="text-5xl">Contact Page</h1>;
}
