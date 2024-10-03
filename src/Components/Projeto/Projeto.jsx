import styles from "./Projeto.module.css";

const Projeto = ({ titulo, texto, temLink, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.cardInner}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        {temLink ? (
          <div className={styles.acessarFolders}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>Acesse</a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Projeto;
