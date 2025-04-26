import Button from "@/components/UI/Button";

export default function HeroSection() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/IMGG2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bem-vindo ao Litoral Art!
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Conheça as melhores ferinhas e produtos artesanais da baixada santista.
        </p>
        <Button label="Explorar Agora" href="/ferinhas" />
      </div>
    </section>
  );
}
