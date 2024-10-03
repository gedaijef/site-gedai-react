import logoJF from "../../assets/logoJ&F.webp";
import styles from "./Header.module.css";
import {useState, useEffect} from "react";

const Header = () => {

  const topicosNavBar = [
    { id: "home", assunto: "O que é" },
    { id: "quemSomos", assunto: "Quem somos" },
    { id: "projetos", assunto: "Projetos" },
    { id: "noticias", assunto: "Notícias" }
  ];


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  
  return (
    <nav className={scrolled ? styles.scrolled : styles.nav}>
      <div className={styles.logos}>
        <img
          src={logoJF}
          alt="Logo instituto J&F"
          className={styles.logoInstituto}
        />
        <h1 className={styles.logo}>
          <a href="index.html" className={styles.link}>GEDAI</a>
        </h1>
      </div>
      <ul className={styles.topicos}>
        {topicosNavBar.map((topico) => (
          <li className={styles.topico}>
            <a href={`#${topico.id}`} className={styles.linkTopico}>{topico.assunto}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

