const validarForm = () => {
  document
    .getElementById("contatoForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let nome = document.getElementById("nome").value.trim();
      let email = document.getElementById("email").value.trim();
      let assunto = document.getElementById("assunto").value.trim();
      let mensagem = document.getElementById("mensagem").value.trim();

      let txt = document.querySelector("#nomeTxt");

      if (nome.length <= 3) {
        alert("Por favor, insira um nome valido! " + txt);
        return;
      }

      if (assunto.length <= 3) {
        alert("Por favor, preencha o campo Assunto.");
        return;
      }

      if ((mensagem, length <= 3)) {
        alert("Por favor, preencha o campo Mensagem.");
        return;
      }

      alert("Formulário enviado com sucesso!");
    });
};

validarForm();
