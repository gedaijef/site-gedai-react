import styles from './App.module.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Skill from './Components/Skill/Skill';
import Titulo from './Components/Título/Titulo';
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




function App() {

  const topicosNavBar = ["O que é", "Quem somos", "Projetos", "Notícias"];

  const skillspt1 = [
    { nome: "Chatbot", icone: <SmartToyIcon /> },
    { nome: "Cursos", icone: <LibraryBooksIcon /> },
    { nome: "IA", icone: <MemoryIcon /> },
    { nome: "Dev Web", icone: <DeveloperModeIcon /> },
  ]

  const skillspt2 = [
    { nome: "Robótica", icone: <PrecisionManufacturingIcon /> },
    { nome: "RPA", icone: <SettingsRemoteIcon /> },
    { nome: "Visão Computacional", icone: <MonitorIcon /> }
  ]

  return (
    <div className="App">
      <Header topicos={topicosNavBar} />
      <main className={styles.main}>
        <Banner foto={fotoGedai} titulo="GEDAI" subtitulo="Grupo de Estudos e Desenvolvimento em Artificial Intelligence" />
        <section className={styles.home}>
          <div className={styles.explicacao}>
            <Titulo titulo="O que é o gedai" cor="var(--azul100)" className={styles.explicacaoTitulo} />
            <p className={styles.explicacaoTexto}>GEDAI é a sigla para Grupo de Estudos e Desenvolvimento em <i>Artificial Intelligence</i>, foi uma
              iniciativa da <a href="https://institutojef.org.br/escolas/tech/" target="_blank" className={styles.explicacaoLink}>Germinare TECH</a> com o intuito de juntar alguns alunos para estudar, aprender e aplicar inteligência artificial para
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
        <section className={styles.quemSomos}>
          <Titulo titulo="Quem somos" cor="white" className={styles.tituloQuemSomos} />
          <p className={styles.quemSomosTexto}>No GEDAI, nossa equipe é a essência da inovação. Composto por dezesseis alunos — Arthur Micarelli,
            Beatriz Belaparte, Camilla Ucci, Davi Nunes, Enzo Tabuchi, Guilherme Barbosa, Gustavo Leite, Gabriela
            Machado, Giovanna Pelati, Karina Martins, Leonardo de Freitas, Letícia Pitta, Maria Julia Oliveira,
            Melissa Martins, Sophie Kumagai, Sophia Ragusa e Vicente Stramantino — e cinco professores experientes —
            Marcelo Grilo, Carlos Santi, Marcelo Modolo,
            Nisflei Galoni e Myrna Kagohara — estamos unidos em nossa missão de explorar tecnológicas e inspirar
            mudanças significativas com criatividade e determinação.</p>
        </section>
        <section className={styles.projetos}>
        <Titulo titulo="Conheça alguns projetos" cor="var(--azul100)" className={styles.tituloProjetos} />
        </section>
      </main>
    </div>
  );
}

export default App;
