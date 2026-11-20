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
      imagem: `${import.meta.env.BASE_URL}desenvolvimento.jpg`,
      titulo: "Desenvolvimento",
      descricao: "Sistemas e aplicações web."
    },
    {
      imagem: `${import.meta.env.BASE_URL}design.png`,
      titulo: "Design",
      descricao: "Interfaces modernas."
    },
    {
      imagem: `${import.meta.env.BASE_URL}tecnologia.png`,
      titulo: "Tecnologia",
      descricao: "Soluções inteligentes."
    }
  ];

  return (
    <section id="servicos" className="servicos-section">
      <h2>Nossos serviços</h2>
      <div className="cards-grid">
        {servicos.map((item) => (
          <CardItem
            key={item.titulo}
            imagem={item.imagem}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    </section>
  );
}