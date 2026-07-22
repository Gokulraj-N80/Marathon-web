import { createFileRoute } from "@tanstack/react-router";
import Gallery from "@/components/marathon/Gallery";
import PressHighlights from "@/components/marathon/PressHighlights";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Run Beyond Limits 2026" },
      { name: "description", content: "Moments from previous editions of Run Beyond Limits." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="gradient-page min-h-screen">
      <section className="page-header-banner text-white py-10 md:py-14">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold text-sm tracking-widest uppercase">Gallery</p>
          <h1 className="mt-2 font-display text-3xl md:text-5xl font-extrabold">Moments That Made Us</h1>
        </div>
      </section>
      <Gallery />
      <PressHighlights />
    </div>
  );
}
