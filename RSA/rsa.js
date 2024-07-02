document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById("nomeExecutante").innerText = localStorage.getItem("nomeSalvo")
  document.getElementById("assinaturaColab").innerText = localStorage.getItem("nomeSalvo")
  document.getElementById("fiscal").innerText = localStorage.getItem("nomeFiscal")
  // document.getElementById("my-textarea1").value = localStorage.getItem("dia_23/06/2024_probl")
  // document.getElementById("my-textarea2").value = localStorage.getItem("dia_23/06/2024_solu")
  // adjustTextareaHeight();
  // verifyHeight();
});


function imprimir() {
  window.print();
}

function atualizaData(params) {
  const initialDate = document.getElementById("dataInicial").value
  const initialDateObj = new Date(initialDate);

  //Altera o nome do documento
  const nomePagina = document.getElementsByTagName("title")
  nomePagina[0].innerText = "RSA 5900107948 - SUL - " + localStorage.getItem("nomeSalvo") + " - " + initialDateObj.getFullYear() + "_" + (initialDateObj.getMonth() + 1) + "_" + (initialDateObj.getDate() + 1);

  for (let index = 0; index < 7; index++) {
    initialDateObj.setDate(initialDateObj.getDate() + 1);
    document.getElementsByClassName("tabData")[index].innerText = formatDate(initialDateObj).split(",")[1]
    document.getElementsByClassName("tabSemana")[index].innerText = formatDate(initialDateObj).split(",")[0]
    verificaChamados(formatDate(initialDateObj).split(",")[1], index)
  }
  adjustTextareaHeight()
  adjustTextareaHeight2()
  verifyHeight()
  document.getElementById("dataFinal").innerText = formatDate(initialDateObj).split(",")[1]
  
}

function formatDate(dateObj) {
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const seconds = dateObj.getSeconds().toString().padStart(2, '0');
  return `${dayOfWeek}, ${day}/${month}/${year}`;
}

function verificaChamados(params, index) {
  // console.log(params)
  let textoDia = ("dia_" + params + "_probl").replace(/\s/g, "")
  let textoDia2 = ("dia_" + params + "_solu").replace(/\s/g, "")
  console.log(textoDia)
  if (localStorage.getItem(textoDia) == null) {
    document.getElementsByTagName("textarea")[index * 2].value = "Sem atendimentos"
    document.getElementsByTagName("textarea")[index * 2 + 1].value = "Sem atendimentos"
  } else {
    document.getElementsByTagName("textarea")[index * 2].value = localStorage.getItem(textoDia)
    document.getElementsByTagName("textarea")[index * 2 + 1].value = localStorage.getItem(textoDia2)
  }
}


const textareas = document.querySelectorAll("textarea");

function adjustTextareaHeight() {
  textareas.forEach((textarea) => {
    textarea.style.height = `${textarea.scrollHeight}px`;
  });
}

function adjustTextareaHeight2() {
  for (let index = 0; index < 7; index++) {
    if (textareas[index * 2].offsetHeight > textareas[index * 2 + 1].offsetHeight) {
      textareas[index * 2 + 1].style.height = textareas[index * 2].offsetHeight + 'px'
      console.log("1")
    }else{
      console.log("2")
      textareas[index * 2].style.height = textareas[index * 2 + 1].offsetHeight + `px`
    }
    
  }
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


function uploadImages() {
  const imageInput = document.getElementById('imageInput');
  const files = imageInput.files;

  if (files.length > 0) {
    const imageContainer = document.getElementById('imageContainer');
    // imageContainer.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      img.style.maxWidth = '100%';
      img.style.width = '6cm';
      img.style.marginBottom = '1rem';
      img.style.margin = '3px';
      imageContainer.appendChild(img);
    }
  }
}

function limparImagens() {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';
}

function pageName() {
  
}