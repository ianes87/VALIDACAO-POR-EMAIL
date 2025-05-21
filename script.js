const emailInput = document.getElementById("email");
const erroEmail = document.getElementById("erro-email");
const formulario = document.getElementById("formulario");
const mensagemFinal = document.getElementById("mensagem-final");

function validarEmailDetalhado(email) {
  if (!email.includes("@")) return "Está faltando o '@'";
  if (!email.includes(".")) return "Está faltando o domínio (ex: .com)";
  if (/[^a-zA-Z0-9._%+-@]/.test(email)) return "Caracteres inválidos detectados";
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) return "Formato de e-mail incompleto";
  return "";
}

emailInput.addEventListener("input", () => {
  const erro = validarEmailDetalhado(emailInput.value);
  if (erro && emailInput.value.length > 3) {
    erroEmail.style.display = "block";
    erroEmail.textContent = erro;
  } else {
    erroEmail.style.display = "none";
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const erro = validarEmailDetalhado(emailInput.value);
  if (!erro) {
    erroEmail.style.display = "none";
    mensagemFinal.textContent = "Seu e-mail foi validado com sucesso. Verifique sua caixa de e-mail com as informações.";
  } else {
    erroEmail.style.display = "block";
    erroEmail.textContent = erro;
    mensagemFinal.textContent = "";
  }
});
