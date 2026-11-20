export default function TextosImagens({
  tag,
  titulo,
  texto,
  imagem,
  altImagem,
  variante = "padrao"
}) {
  return (
    <section className={`textos-imagens textos-imagens--${variante}`}>
      <div className="texto-bloco">
        {tag && <span className="tag">{tag}</span>}
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>

      <div className="imagem-bloco">
        <img src={imagem} alt={altImagem} />
      </div>
    </section>
  );
}