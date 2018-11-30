function cliqueBotao(tecla) {
  if (typeof gvisor == "undefined") {
    document.formcalculadora.visor.value = "";
  }
  document.formcalculadora.visor.value += tecla;
  gvisor = 1;
}

function verificaOperacao(operador, numero1, numero2) {
  if (operador == "+") {
    var resultado = parseFloat(numero1) + parseFloat(numero2);
  } else if (operador == "-") {
    var resultado = numero1 - numero2;
  } else if (operador == "*") {
    var resultado = numero1 * numero2;
  } else if (operador == "/") {
    var resultado = numero1 / numero2;
  }
  if (resultado == Infinity) {
    alert(
      "Erro! não é possível fazer divisão por 0, reinicie a calculadora e faça outra conta."
    );
  }
  return resultado;
}

function verificaOperador(operador) {
  var valor = document.formcalculadora.visor.value;
  delete gvisor;

  if (typeof goper != "undefined" && operador == "resultado") {
    gvalor = verificaOperacao(goper, gvalor, valor);
    document.formcalculadora.visor.value = gvalor;
    delete operador;
    delete gvalor;
    return 0;
  }

  if (typeof gvalor != "undefined") {
    gvalor = verificaOperacao(goper, gvalor, valor);
    goper = operador;
    document.formcalculadora.visor.value = gvalor;
  } else {
    gvalor = valor;
    goper = operador;
  }
}

function inicio() {
  var display = document.getElementById("visor");
  display.value = 0;
}