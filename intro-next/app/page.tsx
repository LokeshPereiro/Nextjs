import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Home Page</span>

      <Link href={"/about"} className="underline text-blue-700 text-lg mt-2">
        GoBack
      </Link>
    </main>
  );
}
