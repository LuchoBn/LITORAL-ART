import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 flex flex-col items-center gap-8 bg-[#f1f5f9]">
        <h2 className="text-3xl font-bold text-[#184e77]">Bienvenidos a Litoral Art</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          <Card
            title="Obra 1"
            description="Descripción breve de la obra de arte."
            image="/IMGG1.jpg"
          />
          <Card
            title="Obra 2"
            description="Otra descripción artística."
            image="/IMGG2.jpg"
          />
        </div>

        <Button>Ver más obras</Button>
      </main>
      <Footer />
    </div>
  );
}
