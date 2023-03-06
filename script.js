const medidor = document.querySelector(".medidor");
const agua = document.querySelector(".agua");
const quantidade = document.querySelector(".quantidade");
const meta = 2000;
let alerta;

let mlConsumidos = 0;


/* adcionar água */
function adicionarAgua(ml) {
  mlConsumidos += ml;
  quantidade.innerText = `${mlConsumidos} ml`;
  const percentualConsumido = (mlConsumidos / 2000) * 100;
  agua.style.height = `${percentualConsumido}%`;

  
  if (mlConsumidos >= meta) {
    if (alerta) {
      alerta.remove();
    }
    alerta = document.createElement('div');
    alerta.classList.add('alert', 'alert-success', 'my-4');
    alerta.textContent = 'Parabéns! Você alcançou sua meta de consumo de água!';
    document.body.appendChild(alerta);
  } else if (mlConsumidos > 0) {
    if (alerta) {
      alerta.remove();
    }
    alerta = document.createElement('div');
    alerta.classList.add('alert', 'alert-info', 'my-4');
    alerta.textContent = `Você bebeu ${mlConsumidos}ml de água até agora!`;
    document.body.appendChild(alerta);
  } else {
    if (alerta) {
      alerta.remove();
    }
  }
}

/* zerar medidor */
function zerarMedidor() {
  mlConsumidos = 0;
  quantidade.innerText = "0 ml";
  agua.style.height = 0;
}




