export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Logotipo TechSolutions" />
        <span>TechSolutions</span>
      </div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  );
}