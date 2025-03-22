function adicionarTarefa() {
  let valorDoInput = document.querySelector("input").value;

  let li = document.createElement("li");
  li.innerHTML =
    valorDoInput + '<span onclick = "deletarTarefa(this)">❌</span>';

  document.querySelector("ul").appendChild(li).style.cursor = "pointer";
  document.querySelector("input").value = "";
}

function deletarTarefa(li) {
  li.parentElement.remove();
  console.log(li);
}
