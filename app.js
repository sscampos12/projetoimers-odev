function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let termoBusca = document.querySelector('input').value.trim().toLowerCase();

  if (termoBusca === "") {
    section.innerHTML = ""; 
    return; 
  }

  let resultados = "";

  for (let situacao in versiculosPorSituacao) {
    if (situacao.toLowerCase().includes(termoBusca)) {
      for (let versiculo of versiculosPorSituacao[situacao]) {
        resultados += `
          <div class="item-resultado">
            <p>${versiculo}</p>
          </div>
        `;
      }
    } else {
      for (let versiculo of versiculosPorSituacao[situacao]) {
        if (versiculo.toLowerCase().includes(termoBusca)) {
          resultados += `
            <div class="item-resultado">
              <p>${versiculo}</p>
            </div>
          `;
        }
      }
    }
  }

  if (resultados === "") {
    resultados = "<p>Nenhum versículo encontrado para esta situação.</p>";
  }

  section.innerHTML = resultados; 
}
