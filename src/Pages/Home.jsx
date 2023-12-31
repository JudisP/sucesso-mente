import { Container } from "reactstrap";
import instagram from "@/shared/svg/instagram.svg";
import tiktok from "@/shared/svg/tiktok.svg";
import youtube from "@/shared/svg/youtube.svg";
import Treinamento from "@/Components/Treinamento";
import Ebook from "@/Components/ebook";
import FormEmail from "@/Components/FormEmail";

const Home = () => {
  return (
    <div className="pagina-home">
      <div className="imagem-estatica">
        <img src="https://drive.google.com/uc?export=view&id=1uDLZkWFrvikT14gvv06fdfL7-SA9IVEB" />
      </div>

      <Container className="pt-5 pb-5 container-principal-home">
        <div className="container-bemvindo mb-4">
          <h2 className="text-uppercase text-center fw-light">
            Construindo Mentes de Sucesso
          </h2>
          <h4 className="text-uppercase fw-light mt-3">BEM-VINDOS!</h4>
          <div>
            <p>
              <strong>Você</strong> já se perguntou por que algumas pessoas são{" "}
              <strong>bem-sucedidas</strong> em suas carreiras e em suas vidas
              pessoais, enquanto outras parecem estar{" "}
              <strong>sempre lutando?</strong> A resposta pode estar em sua
              Mentalidade. Ter uma Mentalidade de Sucesso é fundamental para
              alcançar seus objetivos em todas as áreas da vida!
            </p>

            <p>
              Nossa <strong>Missão</strong> é ajudar você com esse treinamento
              de Desenvolvimento Pessoal que foi projetado para capacitar
              indivíduos que desejam alcançar o sucesso em todas as áreas da
              vida, ao fortalecer sua mentalidade. Acreditamos que cada
              indivíduo possui a capacidade de moldar sua própria realidade. O
              curso abordará técnicas cientificamente comprovadas para construir
              uma mentalidade positiva, resiliente e focada, proporcionando aos
              participantes as ferramentas necessárias para superar desafios,
              maximizar o potencial e alcançar seus objetivos de forma
              consistente.
            </p>
          </div>
        </div>
        <div className="container-destaque-treinamento mb-5">
          <h4 className="text-uppercase mb-4 pb-2">
            Destaques do Treinamento:
          </h4>
          <ol>
            <li>
              Autoconhecimento: Os participantes serão incentivados a explorar
              suas crenças, valores e padrões de pensamento, permitindo uma
              compreensão mais profunda de si mesmos e identificando possíveis
              obstáculos mentais.
            </li>
            <li>
              Autodesenvolvimento: O treinamento fornecerá estratégias para o
              autodesenvolvimento contínuo, incluindo a prática de habilidades
              de comunicação, liderança e gestão do tempo, entre outras.
            </li>
            <li>
              Resiliência e Gerenciamento de Estresse: Os participantes
              aprenderão a lidar melhor com situações de estresse e adversidade,
              desenvolvendo maior resiliência emocional e mental.
            </li>
            <li>
              Definição de Metas e Foco: Serão ensinadas técnicas eficazes de
              definição de metas, bem como métodos para manter o foco e evitar
              distrações.
            </li>
            <li>
              Transformação de Obstáculos em Oportunidades: Os participantes
              aprenderão a ver os desafios como oportunidades de crescimento e
              aprendizado, buscando soluções criativas para superá-los.
            </li>
            <li>
              Cultivo de uma Mentalidade de Abundância: O treinamento incentiva
              a adoção de uma mentalidade de abundância, ajudando os indivíduos
              a se libertarem de pensamentos limitantes e a acreditar que o
              sucesso é possível.
            </li>
          </ol>
        </div>
        <div className="container-resultado">
          <h4 className="text-uppercase mb-4 pb-2">Resultados Esperados:</h4>
          <p>
            Ao concluir o curso "Construindo uma Mentalidade de Sucesso", os
            participantes estarão preparados para colher os frutos de uma
            mentalidade transformadora. Eles poderão:
            <li>
              Estabelecer metas claras e tangíveis em todas as áreas de suas
              vidas.
            </li>
            <li>
              Desenvolver resiliência emocional para enfrentar os desafios com
              confiança.
            </li>
            <li>
              Cultivar uma mentalidade de abundância e superar crenças
              limitantes.
            </li>
            <li>
              Fortalecer relacionamentos pessoais e profissionais através de uma
              comunicação eficaz.
            </li>
            <li>
              Alcançar maior equilíbrio entre vida pessoal e profissional.
            </li>
            <li>
              Experimentar um sentimento de realização e satisfação pessoal.
            </li>
          </p>

          <p>
            Estamos empolgados em receber você nessa jornada de crescimento e
            sucesso pessoal. Se você está pronto para explorar seu potencial
            máximo e construir uma mentalidade que o levará ao sucesso, junte-se
            a nós em nosso curso "Construindo uma Mentalidade de Sucesso" e
            comece a transformar sua vida hoje mesmo!
          </p>

          <p className="m-0">
            Junte-se a nós nesta incrível jornada de autodescoberta e
            crescimento pessoal.
          </p>
          <strong>Inscreva-se agora mesmo!</strong>
        </div>
        <Treinamento />
        <Ebook />
        <div className="baixe-ebook">
          <h2>Baixe Gratuitamente esse ebook</h2>
          <div className="texto">
            <span>
              Neste Ebook, você aprenderá identificar onde você está, e os
              passos para chegar onde você deseja. Queremos te presentear com
              esse conhecimento que poderá mudar totalmente a sua vida.{" "}
            </span>
            <span>
              Preencha com seu melhor e-mail e receba diretamente de nossa
              equipe esse presente
            </span>
          </div>

          <FormEmail />
        </div>
        <div className="redes">
          <h2>SIGA MENTALIDADE DE SUCESSO EM NOSSAS REDES SOCIAIS</h2>
          <div className="icons">
            <div className="background instagram">
              <img src={instagram} className="rede" alt="Instagram" />
            </div>
            <div className="background tiktok">
              <img src={tiktok} className="rede" alt="Tiktok" />
            </div>
            <div className="background youtube">
              <img src={youtube} className="rede" alt="Youtube" />
            </div>
          </div>
        </div>
        <div className="contato">
          <h3>CONTATO</h3>
          <div className="sugestao-mensagem">
            <span>
              <strong>Estamos ansiosos para ouvir de você!</strong>
            </span>
            <span>
              Se você tem alguma dúvida, sugestão, ou gostaria de obter mais
              informações sobre nossos serviços, estamos aqui para ajudar!
            </span>
            <span>
              <strong>Construindo Mentes de Sucesso</strong>
            </span>
          </div>
          <button>
            <a href="mailto:contato@construindomentesdesucesso.com.br">
              Enviar e-mail
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};
export default Home;
