import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import ShowroomSection from "@/components/ShowroomSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amazing Tools Company — Premium Home Finishes & Fixtures" },
      { name: "description", content: "Luxury lighting, modern bathroom fixtures, plumbing solutions, and electrical finishes in Kigali, Rwanda. Visit our showroom today." },
      { property: "og:title", content: "Amazing Tools Company — Premium Home Finishes & Fixtures" },
      { property: "og:description", content: "Luxury lighting, modern bathroom fixtures, plumbing solutions, and electrical finishes in Kigali, Rwanda." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <CategoriesGrid />
      <ProductsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ShowroomSection />
      <AboutSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
