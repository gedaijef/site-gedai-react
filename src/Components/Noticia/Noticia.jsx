import styles from "./Noticia.module.css";

const Noticia = ({ imagem, linkMateria, linkSiteMateria, nomeMateria, tituloMateria, subtituloMateria }) => {
  return (
    <article className={styles.noticia}>
      <img src={imagem} alt="Imagem da notícia" className={styles.foto} />
      <div className={styles.materia}>
        <p>
          <a href={linkSiteMateria} target="_blank" rel="noopener noreferrer">
            {nomeMateria}
          </a>
        </p>
        <h2 className={styles.titulo}>{tituloMateria}</h2>
        <p className={styles.subtitulo}>{subtituloMateria}</p>
        <a href={linkMateria} className={styles.btnAcessarMateria} target="_blank" rel="noopener noreferrer">Acesse</a>
      </div>
    </article>
  );
};

export default Noticia;
