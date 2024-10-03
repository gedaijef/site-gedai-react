import styles from './App.module.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Skill from './Components/Skill/Skill';
import Titulo from './Components/Título/Titulo';
import Carrossel from './Components/Carrossel/Carrossel';
import fotoGedai from './assets/FundoFotoGedai.webp';
import {
  Monitor as MonitorIcon,
  DeveloperMode as DeveloperModeIcon,
  Memory as MemoryIcon,
  SettingsRemote as SettingsRemoteIcon,
  LibraryBooks as LibraryBooksIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  SmartToy as SmartToyIcon
} from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Noticia from './Components/Noticia/Noticia';
import FotoGedaiMetropoles from './assets/FotoGedaiMetropoles.webp';
import FotoTechNeoFeed from './assets/FotoTechNeoFeed.webp';
import FotoEstagioGerminaretechGazeta from './assets/FotoEstagioGerminaretechGazeta.webp';
import FotoTecnologiaNegociosGazeta from './assets/FotoTecnologiaNegociosGazeta.webp';




function App() {

  const skillspt1 = [
    { id: 1, nome: "Chatbot", icone: <SmartToyIcon /> },
    { id: 2, nome: "Cursos", icone: <LibraryBooksIcon /> },
    { id: 3, nome: "IA", icone: <MemoryIcon /> },
    { id: 4, nome: "Dev Web", icone: <DeveloperModeIcon /> },
  ]

  const skillspt2 = [
    { id: 1, nome: "Robótica", icone: <PrecisionManufacturingIcon /> },
    { id: 2, nome: "RPA", icone: <SettingsRemoteIcon /> },
    { id: 3, nome: "Visão Computacional", icone: <MonitorIcon /> }
  ]

  const noticias = [
    { id: 1, imagem: FotoGedaiMetropoles, linkMateria: "https://www.metropoles.com/brasil/educacao-profissionalcomo-a-inteligencia-artificial-pode-ajudar-a-educacao-profissional", linkSiteMateria: "https://www.metropoles.com", nomeMateria: "Metrópoles", tituloMateria: "Como a Inteligência Artificial pode ajudar a Educação Profissional", subtituloMateria: "O GEDAI é um grupo de estudos com missão de explorar a Inteligência Artificial" },
    { id: 2, imagem: FotoTechNeoFeed, linkMateria: "https://neofeed.com.br/negocios/na-jf-a-licao-de-casa-para-lidar-com-o-apagao-de-tecnologia/", linkSiteMateria: "https://neofeed.com.br", nomeMateria: "NeoFeed", tituloMateria: "Na J&F, a lição de casa para lidar com o apagão de tecnologia", subtituloMateria: "A escola de tecnologia Germinare TECH é a aposta da J&F para suprir a demanda por profissionais de TI, ao combinar aulas com estágios nas empresas do grupo." },
    { id: 3, imagem: FotoEstagioGerminaretechGazeta, linkMateria: "https://www.instagram.com/reel/C85RwjLvCaq/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkSiteMateria: "https://www.instagram.com/institutojef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", nomeMateria: "Instituto J&F", tituloMateria: "Vídeo sobre IA, trilha sonora feita em IA!", subtituloMateria: "Temos muitas IAs à nossa disposição. Mas, como as empresas as utilizam hoje em dia?" },
    { id: 4, imagem: FotoTecnologiaNegociosGazeta, linkMateria: "https://www.instagram.com/reel/C2ADb8HtZAV/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkSiteMateria: "https://www.instagram.com/institutojef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", nomeMateria: "Instituto J&F", tituloMateria: "Estágios que visam ampliar os conhecimentos dos alunos da Germinare TECH.", subtituloMateria: "Os estudantes trabalham nas empresas do grupo J&F e convivem com problemas e desafios reais dentro da área de análise de dados e desenvolvimento de sistemas." },
  ]

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <Banner foto={fotoGedai} titulo="GEDAI" subtitulo="Grupo de Estudos e Desenvolvimento em Artificial Intelligence" />
        <section className={styles.home} id="home">
          <div className={styles.explicacao}>
            <Titulo titulo="O que é o gedai" cor="var(--azul100)" className={styles.explicacaoTitulo} />
            <p className={styles.explicacaoTexto}>GEDAI é a sigla para Grupo de Estudos e Desenvolvimento em <i>Artificial Intelligence</i>, foi uma
              iniciativa da <a href="https://institutojef.org.br/escolas/tech/" target="_blank" rel="noopener noreferrer" className={styles.explicacaoLink}>Germinare TECH</a> com o intuito de juntar alguns alunos para estudar, aprender e aplicar inteligência artificial para
              resolução de problemas diversos, como: automação de processos, criação de sistemas inteligentes,
              criacao de chatbots, desenvolvimento de algoritmos, estudar ferramentas de IA para uso ético e
              seguro na escola e nos negócios e outros projetos no qual a inteligência artificial possa ser
              aplicada.
            </p>
          </div>
          <div className={styles.skills}>
            <Titulo titulo="O que fazemos" cor="var(--azul100)" className={styles.skillsTitulo} />
            <div className={styles.listaSkills}>
              <ul className={styles.skillsPT1}>
                {skillspt1.map((skill) => (
                  <Skill skill={skill.nome} icon={skill.icone} />
                ))}
              </ul>
              <ul className={styles.skillsPT2}>
                {skillspt2.map((skill) => (
                  <Skill skill={skill.nome} icon={skill.icone} />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.quemSomos} id="quemSomos">
          <Titulo titulo="Quem somos" cor="white" className={styles.tituloQuemSomos} />
          <p className={styles.quemSomosTexto}>No GEDAI, nossa equipe é a essência da inovação. Composto por dezesseis alunos — Arthur Micarelli,
            Beatriz Belaparte, Camilla Ucci, Davi Nunes, Enzo Tabuchi, Guilherme Barbosa, Gustavo Leite, Gabriela
            Machado, Giovanna Pelati, Karina Martins, Leonardo de Freitas, Letícia Pitta, Maria Julia Oliveira,
            Melissa Martins, Sophie Kumagai, Sophia Ragusa e Vicente Stramantino — e cinco professores experientes —
            Marcelo Grilo, Carlos Santi, Marcelo Modolo,
            Nisflei Galoni e Myrna Kagohara — estamos unidos em nossa missão de explorar tecnológicas e inspirar
            mudanças significativas com criatividade e determinação.</p>
        </section>
        <section className={styles.projetos} id="projetos">
          <Titulo titulo="Conheça alguns projetos" cor="var(--azul100)" className={styles.tituloProjetos} />
          <Carrossel />
        </section>
        <section className={styles.noticias}>
          <Titulo titulo="Notícias" cor="var(--azul100)" className={styles.tituloNoticias} />
          <div className={styles.containerNoticias}>
            {noticias.map((noticia) => (
              <Noticia
                imagem={noticia.imagem}
                linkMateria={noticia.linkMateria}
                linkSiteMateria={noticia.linkSiteMateria}
                nomeMateria={noticia.nomeMateria}
                tituloMateria={noticia.tituloMateria}
                subtituloMateria={noticia.subtituloMateria}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <h3 className={styles.logo}><a href="index.html" className={styles.linkLogo}>GEDAI</a></h3>
        <div>
          <p className={styles.info}>Email: gedai@gmail.com</p>
          <p className={styles.info}>Localizados no quarto andar do Instituto J&F</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
