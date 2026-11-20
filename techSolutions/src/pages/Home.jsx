import Cards from "../components/Cards";
import TextosImagens from "../components/TextosImagens";

export default function Home() {
  return (
    <main id="home" className="home">
      <TextosImagens
        variante="hero"
        tag="TECNOLOGIA E INOVAÇÃO"
        titulo="Transformando ideias em soluções digitais"
        texto="Desenvolvemos soluções tecnológicas para conectar pessoas, negócios e inovação."
        imagem="/hero.jpg"
        altImagem="Desenvolvedor a trabalhar com código em múltiplos monitores"
      />

      <Cards />

      <div id="sobre">
        <TextosImagens
          variante="sobre"
          titulo="Conheça nossa empresa"
          texto="A TechSolutions acredita que a tecnologia pode transformar o futuro. Nossa equipe desenvolve soluções digitais para facilitar processos e melhorar resultados."
          imagem="/equipa.jpg"
          altImagem="Equipa da TechSolutions a colaborar num escritório moderno"
        />
      </div>
    </main>
  );
}