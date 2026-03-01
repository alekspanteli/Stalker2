import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Factions } from "@/components/factions";
import { Gallery } from "@/components/gallery";
import { Editions } from "@/components/editions";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Navigation />
      </Suspense>
      <main>
        <Suspense>
          <Hero />
        </Suspense>
        <Suspense>
          <Stats />
        </Suspense>
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Features />
        </Suspense>
        <Suspense>
          <Factions />
        </Suspense>
        <Suspense>
          <Gallery />
        </Suspense>
        <Suspense>
          <Editions />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
