/*...solution[8]...*/

/*...solution[9]...*/

function promedio(listaDeNumeros) {
	return sumatoria(listaDeNumeros) / listaDeNumeros.length;
}

function sumatoria(listaDeNumeros) {
  let sumatoria = 0;
  for (let numero of listaDeNumeros) {
    sumatoria = sumatoria + numero;
  }
  return sumatoria;
}