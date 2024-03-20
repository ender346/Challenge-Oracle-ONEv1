const letrasEncriptadas = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar(palabra) {
  let palabraEncriptada = "";
  for (const letra of palabra) {
    if (letrasEncriptadas.hasOwnProperty(letra)) {
      palabraEncriptada += letrasEncriptadas[letra];
    } else {
      palabraEncriptada += letra;
    }
  }
  return palabraEncriptada;
}

function desencriptar(palabraEncriptada) {
  let palabraOriginal = "";
  for (let i = 0; i < palabraEncriptada.length; i++) {
    let letraEncontrada = false;
    for (const letra in letrasEncriptadas) {
      if (letrasEncriptadas[letra].startsWith(palabraEncriptada.charAt(i))) {
        palabraOriginal += letra;
        i += letrasEncriptadas[letra].length - 1;
        letraEncontrada = true;
        break;
      }
    }
    if (!letraEncontrada) {
      palabraOriginal += palabraEncriptada.charAt(i);
    }
  }
  return palabraOriginal;
}

const textoInput = document.getElementById("texto");
const accionInput = document.getElementById("accion");
const resultadoInput = document.getElementById("resultado");
const copiarBtn = document.getElementById("copiar");

copiarBtn.addEventListener("click", () => {
  resultadoInput.select();
  document.execCommand("copy");
});

document.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = textoInput.value.toLowerCase();
  const accion = accionInput.value;

  let resultado;
  if (accion === "encriptar") {
    resultado = encriptar(texto);
  } else if (accion === "desencriptar") {
    resultado = desencriptar(texto);
  }

  resultadoInput.value = resultado;
});
