import Cards from "../components/Cards";
import TextosImagens from "../components/TextosImagens";

export default function Home() {
  return (
    <main id="home" className="home">
      <section className="hero-full">
        
        <div className="hero-full__overlay">
          <div className="hero-full__conteudo">
            <span className="tag">TECNOLOGIA E INOVAÇÃO</span>
            <h1>Transformando ideias em soluções digitais</h1>
            <p>
              Desenvolvemos soluções tecnológicas para conectar pessoas, negócios e inovação.
            </p>

            <img
          src={`${import.meta.env.BASE_URL}hero.jpg`}
          alt="Desenvolvedor trabalhando com código em múltiplos monitores"
          className="hero-full__img"
        />
          </div>
        </div>
      </section>

      <div className="container-principal">
        <Cards />

        <div id="sobre">
          <TextosImagens
            titulo="Conheça nossa empresa"
            texto="A TechSolutions acredita que a tecnologia pode transformar o futuro. Nossa equipe desenvolve soluções digitais para facilitar processos e melhorar resultados."
            imagem={`${import.meta.env.BASE_URL}equipa.jpg`}
            altImagem="Equipe da TechSolutions colaborando em um escritório moderno"
            inverter={true}
          />
        </div>
      </div>
    </main>
  );
}