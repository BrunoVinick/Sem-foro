function changeLights() {
  // Semáforo 1
  var redLight1 = document.getElementById('red-1');
  var yellowLight1 = document.getElementById('yellow-1');
  var greenLight1 = document.getElementById('green-1');

  // Semáforo 2
  var redLight2 = document.getElementById('red-2');
  var yellowLight2 = document.getElementById('yellow-2');
  var greenLight2 = document.getElementById('green-2');

  // Semáforo 3
  var redLight3 = document.getElementById('red-3');
  var yellowLight3 = document.getElementById('yellow-3');
  var greenLight3 = document.getElementById('green-3');

  // Função para piscar o amarelo
  function blinkYellow(yellowLight) {
    setTimeout(function() {
      yellowLight.style.backgroundColor = 'yellow';
      setTimeout(function() {
        yellowLight.style.backgroundColor = '#777'; // Apagar amarelo
        setTimeout(function() {
          blinkYellow(yellowLight); // Chamada recursiva para continuar piscando
        }, 1000); // Aguardar 1 segundo antes de piscar novamente
      }, 1000); // Amarelo aceso por 1 segundo
    }, 0); // Iniciar imediatamente
  }

  setTimeout(function() {
    // Semáforo 1: Apenas luz amarela piscando
    redLight1.style.backgroundColor = '#777';
    yellowLight1.style.backgroundColor = '#777';
    greenLight1.style.backgroundColor = '#777';
    blinkYellow(yellowLight1);

    // Semáforo 2: Apenas luz amarela piscando
    redLight2.style.backgroundColor = '#777';
    yellowLight2.style.backgroundColor = '#777';
    greenLight2.style.backgroundColor = '#777';
    blinkYellow(yellowLight2);

    // Semáforo 3: Apenas luz amarela piscando
    redLight3.style.backgroundColor = '#777';
    yellowLight3.style.backgroundColor = '#777';
    greenLight3.style.backgroundColor = '#777';
    blinkYellow(yellowLight3);
  }, 0); // Iniciar imediatamente
}

changeLights(); // Iniciar o ciclo de mudança de luzes
