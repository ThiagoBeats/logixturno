document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById("nomeExecutante").innerText = localStorage.getItem("nomeSalvo")
  document.getElementById("my-textarea1").value = localStorage.getItem("dia_23/06/2024_probl")
  document.getElementById("my-textarea2").value = localStorage.getItem("dia_23/06/2024_solu")
  adjustTextareaHeight();
  verifyHeight();
});


function imprimir() {
  window.print();
}


const textareas = document.querySelectorAll("textarea");

function adjustTextareaHeight() {
  textareas.forEach((textarea) => {
    textarea.style.height = `${textarea.scrollHeight}px`;
  });
}

textareas.forEach((textarea) => {
  textarea.addEventListener("input", adjustTextareaHeight);
  textarea.addEventListener("scroll", adjustTextareaHeight);
});

let textarea1 = document.getElementById("my-textarea1");
let textarea2 = document.getElementById("my-textarea2");

function verifyHeight() {
  if (textarea1.offsetHeight > textarea2.offsetHeight) {
    textarea2.style.height = textarea1.offsetHeight + `px`;
  }
  if (textarea2.offsetHeight > textarea1.offsetHeight) {
    textarea1.style.height = textarea2.offsetHeight + `px`;
  }
}

function teste() {
  textarea2.value +=
    "fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf fasfdf ";
  adjustTextareaHeight();
  verifyHeight();
}

//Será necessário um array vazio
let arrayIncidentes = ["colab", "fiscal"];
arrayIncidentes[0] = "Thiago Carlos"
arrayIncidentes[1] = "Marina Sousa"
{
  data: "25/04/1996";
  incidente: "INC6514651";
  problema: "descrição do problema ocorrido"
  solucao: "Solução encontrada para o problema"
}
