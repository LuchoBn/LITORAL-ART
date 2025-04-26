import NavbarItem from "@/components/UI/NavbarItem";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/IMGG1.png" alt="Logo Litoral Art" className="h-10" />
          <span className="text-xl font-bold text-primary">Litoral Art</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <NavbarItem label="Home" href="/" />
          <NavbarItem label="Ferinhas" href="/ferinhas" />
          <NavbarItem label="Produtos" href="/produtos" />
          <NavbarItem label="Login" href="/login" />
          <NavbarItem label="Cadastro" href="/register" />
        </nav>
      </div>
    </header>
  );
}
