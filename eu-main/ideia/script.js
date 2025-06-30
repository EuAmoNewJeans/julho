const perguntas = [
  {
    enunciado: "Qual termo se refere à simulação de processos de inteligência humana por máquinas?",
    alternativas: ["Machine Learning", "Inteligência Artificial", "Deep Learning", "Big Data"]
  },
  {
    enunciado: "Qual subcampo da IA permite que sistemas aprendam com dados sem serem explicitamente programados?",
    alternativas: ["Robótica", "Visão Computacional", "Machine Learning", "Processamento de Linguagem Natural"]
  },
  {
    enunciado: "Qual tecnologia de IA é amplamente usada em assistentes de voz como Siri e Alexa?",
    alternativas: ["Redes Neurais", "Algoritmos Genéticos", "Processamento de Linguagem Natural (PLN)", "Sistemas Especialistas"]
  },
  {
    enunciado: "Qual o nome do teste proposto por Alan Turing para determinar se uma máquina pode exibir comportamento inteligente equivalente ou indistinguível de um humano?",
    alternativas: ["Teste de Turing", "Teste de Von Neumann", "Teste de Lovelace", "Teste de Shannon"]
  },
  {
    enunciado: "Em qual área da IA o Deep Learning teve um impacto revolucionário, especialmente no reconhecimento de imagens?",
    alternativas: ["Reconhecimento de Voz", "Criação de Música", "Visão Computacional", "Tradução Automática"]
  }
];

let atual = 0; // Índice da pergunta atual
let perguntaAtual; // Objeto da pergunta atual

// Seleciona os elementos HTML que serão manipulados
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

/**
 * Exibe a pergunta atual e suas alternativas na tela.
 * Gerencia o avanço para a próxima pergunta e o fim do quiz.
 */
function mostraPergunta() {
  // Verifica se todas as perguntas já foram exibidas
  if (atual >= perguntas.length) {
    caixaPerguntas.textContent = "Fim do Quiz de IA! Obrigado por participar."; // Mensagem de fim do quiz
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas
    return; // Encerra a função, pois não há mais perguntas
  }

  // Pega a pergunta atual do array de perguntas
  perguntaAtual = perguntas[atual];

  // Atualiza o texto da caixa de perguntas com o enunciado da pergunta atual
  caixaPerguntas.textContent = perguntaAtual.enunciado;

  // Limpa quaisquer alternativas anteriores que possam existir
  caixaAlternativas.innerHTML = ''; 

  // Itera sobre as alternativas da pergunta atual para criar os botões
  perguntaAtual.alternativas.forEach((alternativa) => {
    const alternativaElemento = document.createElement('button'); // Cria um novo elemento de botão
    alternativaElemento.textContent = alternativa; // Define o texto do botão como a alternativa
    alternativaElemento.classList.add('alternativa'); // Adiciona uma classe CSS para estilização

    // Adiciona um evento de clique ao botão
    alternativaElemento.addEventListener('click', () => {
      // Exibe um alerta com a alternativa escolhida
      alert('Você escolheu: ' + alternativa);
      
      atual++; // Avança para a próxima pergunta incrementando o índice
      mostraPergunta(); // Chama a função novamente para exibir a próxima pergunta
    });

    // Adiciona o botão criado à caixa de alternativas no HTML
    caixaAlternativas.appendChild(alternativaElemento);
  });
}

// Chama a função pela primeira vez para iniciar o quiz
mostraPergunta();