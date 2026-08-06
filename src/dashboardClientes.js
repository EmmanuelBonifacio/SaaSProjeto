function openModal() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function salvarCliente() {
  const nome = document.getElementById("nome").value;
  const nomeEmpresa = document.getElementById("nomeEmpresa").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;

  if (nome && nomeEmpresa && email && telefone && endereco) {
    const lista = document.getElementById("lista-clientes");
    const clienteDiv = document.createElement("div");
    clienteDiv.className = "cliente";
    clienteDiv.innerHTML = `
          <span>${nome} - ${nomeEmpresa} - ${telefone}</span>
          <button class="btn-delete" onclick="this.parentElement.remove()">Excluir</button>
        `;
    lista.appendChild(clienteDiv);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    closeModal();
  } else {
    alert("Preencha todos os campos!");
  }
}
