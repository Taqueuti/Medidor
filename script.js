const medidor = document.querySelector(".medidor");
const agua = document.querySelector(".agua");
const quantidade = document.querySelector(".quantidade");

let mlConsumidos = 0;

function adicionarAgua(ml) {
  mlConsumidos += ml;
  quantidade.innerText = `${mlConsumidos} ml`;
  const percentualConsumido = (mlConsumidos / 2000) * 100;
  agua.style.height = `${percentualConsumido}%`;


  if(mlConsumidos == 2000){
    const alerta = document.createElement('div');
    alerta.classList.add('alert', 'alert-success', 'my-4');
    alerta.textContent = 'Parabéns! Você alcançou sua meta de consumo de água!';
    document.body.appendChild(alerta);
  }
 
}

function zerarMedidor() {
  mlConsumidos = 0;
  quantidade.innerText = "0 ml";
  agua.style.height = 0;
}




