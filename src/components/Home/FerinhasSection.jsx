import Card from "@/components/UI/Card";

export default function FerinhasSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Ferinhas da Baixada
        </h2>

        {/* Grid de Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Card
            image="/IMGG3.png"
            title="Feirinha do Centro"
            description="Produtos artesanais únicos no coração da cidade."
          />
          <Card
            image="/IMGG4.png"
            title="Feira de Santos"
            description="Descubra sabores e cultura na tradicional feira de Santos."
          />
          <Card
            image="/IMGG5.png"
            title="Artesanato na Praia"
            description="Peças exclusivas feitas por artistas locais na praia."
          />
        </div>
      </div>
    </section>
  );
}
