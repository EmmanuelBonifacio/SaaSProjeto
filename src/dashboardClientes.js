// Funções para abrir e fechar o modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Função para salvar cliente (cria o card na lista)
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
        <input type="text" class="email" placeholder="Email" value="${email}" />
        <input type="text" class="telefone" placeholder="Telefone" value="${telefone}" />
        <input type="text" class="endereco" placeholder="Endereço" value="${endereco}" />
        <input type="number" class="modulos" placeholder="Módulos" />
        <input type="text" class="mensalidade" placeholder="Mensalidade" />
        <textarea class="observacao" placeholder="Observações"></textarea>
        <button class="btn-save-extra">Salvar Dados</button>
      </div>
    `;

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

    // Lógica do salvar dados extras (editar/atualizar informações)
    const salvarExtra = clienteDiv.querySelector(".btn-save-extra");
    salvarExtra.addEventListener("click", () => {
      const emailNovo = clienteDiv.querySelector(".email").value;
      const telefoneNovo = clienteDiv.querySelector(".telefone").value;
      const enderecoNovo = clienteDiv.querySelector(".endereco").value;
      const modulosNovo = clienteDiv.querySelector(".modulos").value;
      const mensalidadeNovo = clienteDiv.querySelector(".mensalidade").value;
      const observacaoNova = clienteDiv.querySelector(".observacao").value;

      alert(`Informações atualizadas:
Email: ${emailNovo}
Telefone: ${telefoneNovo}
Endereço: ${enderecoNovo}
Módulos: ${modulosNovo}
Mensalidade: ${mensalidadeNovo}
Observações: ${observacaoNova}`);
    });

    // Limpa os campos do modal
    document.getElementById("nome").value = "";
    document.getElementById("nomeEmpresa").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("endereco").value = "";

    closeModal();
  } else {
    alert("Preencha todos os campos!");
  }
}
