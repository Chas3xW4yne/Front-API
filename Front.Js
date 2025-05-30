/* script.js */
const API_URL = "http://localhost:8080/api/clientes";

async function criarCliente() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  await fetch(https://cliente-api-production.up.railway.app/cliente, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email })
  });
  listarClientes();
}

async function listarClientes() {
  const response = await fetch(https://cliente-api-production.up.railway.app/cliente);
  const clientes = await response.json();
  const lista = document.getElementById('listaClientes');
  lista.innerHTML = '';
  clientes.forEach(cliente => {
    const item = document.createElement('li');
    item.textContent = `ID: ${cliente.id} | Nome: ${cliente.nome} | Email: ${cliente.email}`;
    lista.appendChild(item);
  });
}

async function atualizarCliente() {
  const id = document.getElementById('id').value;
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  await fetch(`${https://cliente-api-production.up.railway.app/cliente}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email })
  });
  listarClientes();
}

async function deletarCliente() {
  const id = document.getElementById('id').value;
  await fetch(`${https://cliente-api-production.up.railway.app/cliente}/${id}`, {
    method: 'DELETE'
  });
  listarClientes();
}

// Carregar lista ao abrir a página
window.onload = listarClientes;
