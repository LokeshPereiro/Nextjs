import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/main");
  return (
    <main>
      <h1>Hola Home!</h1>
    </main>
  );
}
