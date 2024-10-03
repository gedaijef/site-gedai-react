import styles from "./Banner.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Banner = ({foto, titulo, subtitulo}) => {
  return (
    <section className={styles.telaInicial}>
      <img src={foto} className={styles.foto} alt="Grupo GEDAI" />
      <div className={styles.textos}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p>{subtitulo}</p>
        <div className={styles.textosLink}>
          <p className={styles.subtitulo}>Conheça o grupo</p>
          <a href="#home" id="scroll-down" className={styles.scroll}>
            <KeyboardArrowDownIcon/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
