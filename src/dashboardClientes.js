// Funções para abrir e fechar o modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Função para salvar cliente
function salvarCliente() {
  const nome = document.getElementById("nome").value;
  const nomeEmpresa = document.getElementById("nomeEmpresa").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;

  // Verifica se todos os campos foram preenchidos
  if (nome && nomeEmpresa && email && telefone && endereco) {
    const lista = document.getElementById("lista-clientes");
    const clienteDiv = document.createElement("div");
    clienteDiv.className = "cliente";

    // Estrutura do card do cliente
    clienteDiv.innerHTML = `
      <div class="cabecalho">
        <span>${nome} - ${nomeEmpresa}</span>
        <button class="seta">▼</button>
        <button class="btn-delete">Excluir</button>
      </div>
      <div class="formulario">
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
        <p>Endereço: ${endereco}</p>
        <textarea placeholder="Observações"></textarea>
        <button class="btn-save-extra">Salvar Dados</button>
      </div>
    `;

    // Adiciona o cliente na lista
    lista.appendChild(clienteDiv);

    // Lógica da seta (abrir/fechar formulário)
    const seta = clienteDiv.querySelector(".seta");
    const formulario = clienteDiv.querySelector(".formulario");
    seta.addEventListener("click", () => {
      formulario.classList.toggle("aberto");
    });

    // Lógica do excluir
    const excluir = clienteDiv.querySelector(".btn-delete");
    excluir.addEventListener("click", () => {
      clienteDiv.remove();
    });

    // Limpa os campos do modal
    document.getElementById("nome").value = "";
    document.getElementById("nomeEmpresa").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("endereco").value = "";

    // Fecha o modal
    closeModal();
  } else {
    alert("Preencha todos os campos!");
  }
}
