import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import {
  createWebsiteSchema,
  createSoftwareApplicationSchema,
} from "@/lib/seo";

export default function Home() {
  const websiteSchema = createWebsiteSchema();
  const softwareSchema = createSoftwareApplicationSchema();

  return (
    <main className="h-screen w-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
