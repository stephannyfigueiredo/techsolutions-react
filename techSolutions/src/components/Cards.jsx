function CardItem({ imagem, titulo, descricao }) {
  return (
    <article className="card">
      <img src={imagem} alt={titulo} className="card-imagem" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  );
}

export default function Cards() {
  const servicos = [
    {
      imagem: "/desenvolvimento.jpg",
      titulo: "Desenvolvimento",
      descricao: "Sistemas e aplicações web."
    },
    {
      imagem: "/design.png",
      titulo: "Design",
      descricao: "Interfaces modernas."
    },
    {
      imagem: "/tecnologia.png",
      titulo: "Tecnologia",
      descricao: "Soluções inteligentes."
    }
  ];

  return (
    <section id="servicos" className="servicos-section">
      <h2>Nossos serviços</h2>
      <div className="cards-grid">
        {servicos.map((servico) => (
          <CardItem
            key={servico.titulo}
            imagem={servico.imagem}
            titulo={servico.titulo}
            descricao={servico.descricao}
          />
        ))}
      </div>
    </section>
  );
}