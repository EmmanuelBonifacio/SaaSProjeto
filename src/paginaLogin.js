// array de objeto para armazenar usuarios
const listaUsuarios = [
  {
    id: 1,
    usuario: "Emmanuel Bonifacio",
    email: "teste@gmail.com",
    senha: "12345678",
  },
];

function login(email, senha) {
  // procurar no array um usuario que tenha o mesmo email e senha
  const usuarioEncontrado = listaUsuarios.find(
    (user) => user.email === email && user.senha === senha,
  );
  if (usuarioEncontrado) {
    console.log("Login realizado com sucesso!");
    return true; // retorna verdadeiro para indicar sucesso
  } else {
    console.log("Email ou senha errado.");
    return false; //retorna falso para vindicar falha
  }
}

// capitura de envio do formulario
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // evita recarregar a pagina

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (login(email, senha)) {
      mensagem.textContent = "login realizado com sucesso!";
    } else {
      mensagem.textContent = "Email ou senha invalidos. ";
    }
  });
