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

  setTimeout(function() {
    // Semáforo 1: Vermelho
    redLight1.style.backgroundColor = 'red';
    yellowLight1.style.backgroundColor = '#777';
    greenLight1.style.backgroundColor = '#777';

    setTimeout(function() {
      // Semáforo 1: Verde
      redLight1.style.backgroundColor = '#777';
      yellowLight1.style.backgroundColor = '#777';
      greenLight1.style.backgroundColor = 'green';

      setTimeout(function() {
        // Semáforo 1: Amarelo
        redLight1.style.backgroundColor = '#777';
        yellowLight1.style.backgroundColor = 'yellow';
        greenLight1.style.backgroundColor = '#777';
      }, 5000); // Aguardar 5 segundos com luz verde no Semáforo 1
    }, 5000); // Aguardar 5 segundos com luz vermelha no Semáforo 1

    // Ciclo do Semáforo 2 começa aqui após 2 segundos
    setTimeout(function() {
      // Semáforo 2: Vermelho
      redLight2.style.backgroundColor = 'red';
      yellowLight2.style.backgroundColor = '#777';
      greenLight2.style.backgroundColor = '#777';

      setTimeout(function() {
        // Semáforo 2: Verde
        redLight2.style.backgroundColor = '#777';
        yellowLight2.style.backgroundColor = '#777';
        greenLight2.style.backgroundColor = 'green';

        setTimeout(function() {
          // Semáforo 2: Amarelo
          redLight2.style.backgroundColor = '#777';
          yellowLight2.style.backgroundColor = 'yellow';
          greenLight2.style.backgroundColor = '#777';
        }, 5000); // Aguardar 5 segundos com luz verde no Semáforo 2
      }, 5000); // Aguardar 5 segundos com luz vermelha no Semáforo 2
    }, 2000); // Aguardar 2 segundos após o ciclo do Semáforo 1 para iniciar o Semáforo 2

    // Ciclo do Semáforo 3 começa aqui após 4 segundos
    setTimeout(function() {
      // Semáforo 3: Vermelho
      redLight3.style.backgroundColor = 'red';
      yellowLight3.style.backgroundColor = '#777';
      greenLight3.style.backgroundColor = '#777';

      setTimeout(function() {
        // Semáforo 3: Verde
        redLight3.style.backgroundColor = '#777';
        yellowLight3.style.backgroundColor = '#777';
        greenLight3.style.backgroundColor = 'green';

        setTimeout(function() {
          // Semáforo 3: Amarelo
          redLight3.style.backgroundColor = '#777';
          yellowLight3.style.backgroundColor = 'yellow';
          greenLight3.style.backgroundColor = '#777';

          // Reiniciar o ciclo após 2 segundos de luz amarela no Semáforo 3
          setTimeout(function() {
            changeLights();
          }, 2000); // 2 segundos após o ciclo do Semáforo 3
        }, 5000); // Aguardar 5 segundos com luz verde no Semáforo 3
      }, 5000); // Aguardar 5 segundos com luz vermelha no Semáforo 3
    }, 4000); // Aguardar 4 segundos após o ciclo do Semáforo 1 para iniciar o Semáforo 3
  }, 0); // Iniciar imediatamente com a luz vermelha no Semáforo 1
}

changeLights(); // Iniciar o ciclo de mudança de luzes