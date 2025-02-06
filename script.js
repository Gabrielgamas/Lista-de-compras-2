document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.getElementById("btn-add");
  const input = document.getElementById("add-item");
  const itemsContainer = document.querySelector(".items-container");

  btnAdd.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const itemText = input.value.trim();
    if (itemText === "") return; // Impede itens vazios

    // Criando um novo item
    const newItem = document.createElement("div");
    newItem.classList.add("items");

    newItem.innerHTML = `
        <input type="checkbox" />
        <p>${itemText}</p>
        <button class="btn-delete"></button>
      `;

    itemsContainer.appendChild(newItem);
    input.value = "";
    input.focus(); // Limpa o input

    // Adiciona evento ao botão de deletar
    newItem.querySelector(".btn-delete").addEventListener("click", () => {
      newItem.remove();
      showDeletedMessage(); // Exibe mensagem
    });
  });

  function showDeletedMessage() {
    // Criar o span de notificação
    const message = document.createElement("span");
    message.innerHTML = `
        <img src="./assets/danger.svg" alt="" />
        <p>O item foi removido da lista</p>
      `;
    message.classList.add("delete-message");

    // Adiciona ao final da lista
    document.body.appendChild(message);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      message.remove();
    }, 3000);
  }
});
