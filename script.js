document.addEventListener("DOMContentLoaded", function () {
  // Esta função será executada quando o DOM estiver completamente carregado
  document.getElementById("solucao").value =
    localStorage.getItem("relatorioSalvo");
  document.getElementById("Turno").value = localStorage.getItem("turnoSalvo");
  document.getElementById("Nome").value = localStorage.getItem("nomeSalvo");
  document.getElementById("Matricula").value =
    localStorage.getItem("matriculaSalva");
  atualizaParams();
  var elemento = document.getElementById("imgRelatorio");
  elemento.disabled = true;
});

var turno = document.getElementById("Turno").value;
var nome = document.getElementById("Nome").value;
var data = document.getElementById("Data").value;
var matricula = document.getElementById("Matricula").value;

var Processo = document.getElementById("Processo").value;
var Incidente = document.getElementById("Incidente").value;
var Equipamento = document.getElementById("Equipamento").value;
var Acionamento = document.getElementById("Acionamento").value;
var Encerramento = document.getElementById("Encerramento").value;

var Problema = document.getElementById("probl").value;
var Solucao = document.getElementById("solu").value;

var Apontamento;

var problemas = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
var solucoes = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

function atualizaSolucoes() {
  atualizaParams2();
  var textoProblema = document.getElementById("probl").value;
  var textoSolucao = document.getElementById("solu").value;

  if (Processo == "") {
    window.alert("Preencha o processo");
  } else if (Incidente == "" || Incidente == "INC") {
    window.alert("Preencha o incidente");
  } else if (Equipamento == "") {
    window.alert("Preencha a tag do equipamento");
  } else if (Acionamento.includes("undefined")) {
    window.alert("Preencha o horário do atendimento");
  } else if (turno == "" || nome == "" || data == "//" || matricula == "") {
    window.alert("Preencha seus dados pessoais e a data de hoje");
  } else if (textoProblema == "") {
    window.alert("Preencha o problema ocorrido");
  } else if (textoSolucao == "") {
    window.alert("Preencha a solução");
  } else {
    for (let index = 0; index < 16; index++) {
      if (problemas[index] === "" && problemas[index - 1] !== textoProblema) {
        problemas[index] = textoProblema;
        solucoes[index] = textoSolucao;
        if (Encerramento.includes("undefined")) {
          Encerramento = "Em aberto";
        }
        document.getElementById("solucao").value +=
          "*Processo:* " +
          Processo +
          "\n" +
          "*Incidente:* " +
          Incidente +
          "\n" +
          "*Equipamento:* " +
          Equipamento +
          "\n\n" +
          "*Acionamento:* " +
          Acionamento +
          "\n\n" +
          "*Problema:* " +
          problemas[index] +
          "\n\n" +
          "*Solução:* " +
          solucoes[index] +
          "\n\n" +
          Apontamento +
          "\n\n*Encerramento:* " +
          Encerramento +
          "\n_\n";
        localStorage.setItem("nomeFiscal", "Nayara Moreira");
        geradorRSA();
        document.getElementById("Incidente").value = "";
        document.getElementById("probl").value = "";
        document.getElementById("solu").value = "";
        salvaDados();
        break;
      }
    }
  }
}

function salvaDados() {
  var relat = document.getElementById("solucao").value;
  localStorage.setItem("relatorioSalvo", relat);
  localStorage.setItem("nomeSalvo", nome);
  localStorage.setItem("matriculaSalva", matricula);
  localStorage.setItem("turnoSalvo", turno);
}
var DadosDoUsuario;
function atualizaParams() {
  imgPerfil();
  turno = document.getElementById("Turno").value;
  nome = document.getElementById("Nome").value;
  data = document.getElementById("Data").value;
  matricula = document.getElementById("Matricula").value;

  var ano = data.substring(0, 4);
  var mes = data.substring(5, 7);
  var dia = data.substring(8, 10);

  data = dia + "/" + mes + "/" + ano;

  DadosDoUsuario =
    "<strong>*Turno:* " +
    turno +
    "</strong> - " +
    nome +
    "<br>" +
    "*Matricula:* " +
    matricula +
    "<br> *Data:* " +
    data +
    "<br><br>";

  document.getElementById("formatedText").innerHTML = DadosDoUsuario;
}

function atualizaParams2() {
  Processo = document.getElementById("Processo").value;
  Incidente = document.getElementById("Incidente").value;
  Equipamento = document.getElementById("Equipamento").value;
  Acionamento = document.getElementById("Acionamento").value;
  Encerramento = document.getElementById("Encerramento").value;
  Apontamento = document.getElementById("apontamento").value;
  if (Apontamento == "" || Apontamento == 0) {
    Apontamento = "*Não houve apontamento de parada*";
  } else {
    Apontamento = "*Houve apontamento de aproximadamente " + Apontamento + "*";
  }

  var Aano = Acionamento.substring(0, 4);
  var Ames = Acionamento.substring(5, 7);
  var Adia = Acionamento.substring(8, 10);
  var horaAcionamento = Acionamento.split("T")[1];

  var Eano = Encerramento.substring(0, 4);
  var Emes = Encerramento.substring(5, 7);
  var Edia = Encerramento.substring(8, 10);
  var horaEncerramento = Encerramento.split("T")[1];

  Acionamento = Adia + "/" + Ames + "/" + Aano + " às " + horaAcionamento;
  Encerramento = Edia + "/" + Emes + "/" + Eano + " às " + horaEncerramento;
}

var TextToCopy = "";
function copiar() {
  TextToCopy =
    document.getElementById("formatedText").innerText +
    "\n" +
    document.getElementById("solucao").value;
  navigator.clipboard.writeText(TextToCopy).then(
    function () {
      window.alert("Texto copiado com sucesso!");
    },
    function (err) {
      window.alert("Erro ao copiar texto: ", err);
    }
  );
}

function apagar() {
  if (window.confirm("Deseja mesmo apagar o relatório criado? ")) {
    document.getElementById("solucao").value = "";
  }
}

function encaminhar() {
  var textToCopy =
    document.getElementById("formatedText").innerText +
    "\n" +
    document.getElementById("solucao").value;

  // Substituir quebras de linha por %0A
  var encodedText = encodeURIComponent(textToCopy).replace(/%0A/g, "%0A");

  var fullMessage = "https://wa.me/?text=" + encodedText;
  window.open(fullMessage, "_blank");
}

/*
function imgPerfil(params) {
  var img = document.getElementById("imgPerfil");
  nome = document.getElementById("Nome");
  if (nome.value.toUpperCase().includes("PEDRO")) {
    img.src = "./Imagens/pedro.jpg";
  } else {
    if (nome.value.toUpperCase().includes("LORENA")) {
      img.src = "./Imagens/lorena.jpg";
    } else {
      if (
        nome.value.toUpperCase().includes("VINIC") ||
        nome.value.toUpperCase().includes("VINÍC")
      ) {
        img.src = "./Imagens/vinic.jpg";
      } else {
        if (nome.value.toUpperCase().includes("LUIS")) {
          img.src = "./Imagens/luis.jpg";
        } else {
          img.src = "./Imagens/imgteste.jpg";
        }
      }
    }
  }
}*/

//Atualiza a foto do usuário mostrada na tela
function imgPerfil() {
  const img = document.getElementById("imgPerfil");
  const nome = document.getElementById("Nome").value.toUpperCase();

  // Mapeamento de nomes para imagens
  const imagens = {
    PEDRO: "./Imagens/pedro.jpg",
    LORENA: "./Imagens/lorena.jpg",
    VINIC: "./Imagens/vinic.jpg",
    VINÍC: "./Imagens/vinic.jpg",
    LUIS: "./Imagens/luis.jpg",
  };

  // Verifica se algum nome corresponde
  for (const chave in imagens) {
    if (nome.includes(chave)) {
      img.src = imagens[chave];
      return;
    }
  }

  // Imagem padrão
  img.src = "./Imagens/imgteste.jpg";
}

//Verifica o setor para gerar o relatório
function verificaSetor() {
  setor = document.getElementById("setor");
  if (setor.value == "automacaovgr") {
    window.location.href = "./setores/vgr/vgr.html";
  } else {
    if (setor.value == "eletricapico") {
      window.location.href = "./setores/eletricaPico/eletPico.html";
    }
  }
}

//Salva os dados para gerar o RSA
function geradorRSA() {
  let dataProblema = "dia_" + data + "_probl";
  let dataSolucao = "dia_" + data + "_solu";

  if (localStorage.getItem(dataProblema) == null) {
    localStorage.setItem(
      dataProblema,
      document.getElementById("Incidente").value +
        " - " +
        document.getElementById("probl").value +
        "\n\n"
    );
  } else {
    localStorage.setItem(
      dataProblema,
      localStorage.getItem(dataProblema) +
        document.getElementById("Incidente").value +
        " - " +
        document.getElementById("probl").value +
        "\n\n"
    );
  }

  if (localStorage.getItem(dataSolucao) == null) {
    localStorage.setItem(
      dataSolucao,
      document.getElementById("Incidente").value +
        " - " +
        document.getElementById("solu").value +
        "\n\n"
    );
  } else {
    localStorage.setItem(
      dataSolucao,
      localStorage.getItem(dataSolucao) +
        document.getElementById("Incidente").value +
        " - " +
        document.getElementById("solu").value +
        "\n\n"
    );
  }
}



//*********** Lógica do CHATBOT ****************/

let respostaChatbot = ''

const sourceId = "cha_cJ2PRVOOYN7TPNH7uZRlm";
const apiKey = "sec_33ZQPySkOpWg8s3ETNwtFkL0NDDyKb1W";

const config = {
  headers: {
    "x-api-key": apiKey,
    "Content-Type": "application/json",
  },
};

function perguntar(pergunta) {
  const data = {
    sourceId: sourceId,
    messages: [
      {
        role: "user",
        content: pergunta,
      },
    ],
  };
  var resp = document.createElement("p");
  const chatDisplay = document.getElementById("chatDisplay");
  axios
    .post("https://api.chatpdf.com/v1/chats/message", data, config)
    .then((response) => {
      console.log("Resposta:", response.data.content);
      respostaChatbot = response.data.content;
      resp.innerText = 'Chatbot: ' + respostaChatbot
    })
    .catch((error) => {
      resp.innerText = 'Chatbot: ' +  error.message
      console.error("Erro:", error.message);
      console.log("Response:", error.response.data);
    });
    
  resp.style.borderBottom = '1px solid black'
    chatDisplay.appendChild(resp);
}

function openPopup() {
  console.log("ai");
  document.getElementById("chatbotPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("chatbotPopup").style.display = "none";
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const chatDisplay = document.getElementById("chatDisplay");

  const userMessage = inputField.value;
  if (userMessage.trim() === "") return;

  // Exibir mensagem do usuário
  var perg = document.createElement("p");
  perg.innerText = 'Você: ' +  userMessage
  perg.style.backgroundColor = 'DarkGray'
  perg.style.width = '100%'
  perg.style.color = "Black"
  chatDisplay.appendChild(perg)
  //chatDisplay.innerHTML += `<div><strong>Você:</strong> ${userMessage}</div>`;

  // Simular resposta do chatbot
  perguntar(userMessage);
  //const botResponse = respostaChatbot
  //chatDisplay.innerHTML += `<div><strong>Chatbot:</strong> ${respostaChatbot}</div><br>--------------------------------------------------------------------------------`;

  // Limpar o campo de entrada
  inputField.value = "";
  chatDisplay.scrollTop = chatDisplay.scrollHeight; // Rolar para o fundo
}
