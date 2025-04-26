import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import HeroSection from "@/components/Home/HeroSection"; // vamos a crear este
import FerinhasSection from "@/components/Home/FerinhasSection"; // y este
import ProdutosSection from "@/components/Home/ProdutosSection"; // y este

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Ferinhas da Baixada Section */}
        <FerinhasSection />

        {/* Produtos Section */}
        <ProdutosSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
