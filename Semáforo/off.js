function changeLights() {
    var redLight = document.getElementById('red');
    var yellowLight = document.getElementById('yellow');
    var greenLight = document.getElementById('green');
  
    var toggle = false; // Variável para alternar entre acesa e apagada
  
    setInterval(function() {
      toggle = !toggle; // Inverter o estado de toggle
      if (toggle) {
        yellowLight.style.backgroundColor = 'yellow'; // Acender a luz amarela
      } else {
        yellowLight.style.backgroundColor = '#777'; // Apagar a luz amarela
      }
    }, 1000); // Trocar de estado a cada 1 segundo
  
    // Garantir que as luzes vermelha e verde estejam apagadas
    redLight.style.backgroundColor = '#777';
    greenLight.style.backgroundColor = '#777';
  }
  
  changeLights(); // Iniciar o ciclo de piscar da luz amarela