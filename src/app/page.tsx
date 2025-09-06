import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Header />
      <Hero />
    </main>
  );
}
