export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          <img src="/logo.jpg" alt="Logotipo TechSolutions" />
          <span>TechSolutions</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>
    </header>
  );
}