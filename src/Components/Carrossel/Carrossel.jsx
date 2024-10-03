import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Projeto from "../Projeto/Projeto";

const projetos = [
  {
    id: 1,
    titulo: "Rhai",
    texto:
      "Esse projeto foi iniciado com a ideia de criar um Chatbot que ajudasse a diminuir os chamados do RH do Instituto J& F.A RHAI com uma mensagem pode te encaminhar para a solução do seu problema de forma rápida, ajudando tanto quem precisa de ajuda quanto quem trabalha no RH.",
    temLink: false,
  },
  {
    id: 2,
    titulo: "Suporte T.I",
    texto:
      "Foi criado com o intuito de resolver os problemas que acontecem nas salas de aula, automatizando a forma como a T.I atente esses chamados. A maneira encontrada para resolver as situações foi desenvolver um site de suporte para a TI, onde as pessoas podem informar a sala e o problema que precisa ser resolvido.",
    temLink: false,
  },
  {
    id: 3,
    titulo: "Sonia",
    texto:
      "Sonia, chatbot e assistente virtual do aplicativo Sempre JBS, ajuda o usuário com dúvidas frequentes e a se guiar pelo app. Conta também com uma equipe de assistentes caso o colaborador não encontre a solução de seu problema.",
    temLink: false,
  },
  {
    id: 4,
    titulo: "Folder's",
    texto:
      "Todo mês nossa equipe cria um folder com diversas inteligências artificiais, com o objetivo de ajudar a automatizar o trabalho, tanto de um colaborador do Instituto, quanto o de um professor. Já foram mais de 300 entregues por todo o Instituto.",
    temLink: true,
    link: "indexFolder.html",
  },
  {
    id: 5,
    titulo: "Chat dos valores",
    texto:
      "O Chat dos valores é uma aplicação de Inteligência Artificial Generativa, que busca solucionar as duvidas dos colaboradores quanto aos valores do Instituto J&F.",
    temLink: true,
    link: "https://institutojef.org.br/valores/",
  },
];

const Carrossel = ({ titulo, texto, temLink, link }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {projetos.map((projeto) => (
          <Projeto
            titulo={projeto.titulo}
            texto={projeto.texto}
            temLink={projeto.temLink}
            link={projeto.link}
          />
        ))}
      </Slider>
    </div>
  );
};
export default Carrossel;
