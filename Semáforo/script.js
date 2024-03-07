function changeLights() {
  var redLight = document.getElementById('red');
  var yellowLight = document.getElementById('yellow');
  var greenLight = document.getElementById('green');

  setTimeout(function() {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = '#777';
    greenLight.style.backgroundColor = '#777';

    setTimeout(function() {
      redLight.style.backgroundColor = '#777';
      yellowLight.style.backgroundColor = '#777';
      greenLight.style.backgroundColor = 'green';

      setTimeout(function() {
        redLight.style.backgroundColor = '#777';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = '#777';

        setTimeout(function() {
          changeLights(); // Reiniciar o ciclo após 2 segundos de luz amarela
        }, 2000);
      }, 5000); // Aguardar 5 segundos com luz verde
    }, 5000); // Aguardar 5 segundos com luz vermelha
  }, 0); // Iniciar imediatamente com a luz vermelha
}

changeLights(); // Iniciar o ciclo de mudança de luzes