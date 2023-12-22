document.addEventListener('DOMContentLoaded', function () {
    const btnEncriptar = document.getElementById('btn-encriptar');
    const btnDesencriptar = document.getElementById('btn-desencriptar');
    const btnCopy = document.getElementById('btn-copy');
  
    btnEncriptar.addEventListener('click', function (e) {
      e.preventDefault();
      const inputTexto = document.getElementById('input-texto').value;
      const clave = 3; // Puedes ajustar la clave según tu preferencia
      const textoEncriptado = encriptarTexto(inputTexto, clave);
      document.getElementById('msg').value = textoEncriptado;
    });
  
    btnDesencriptar.addEventListener('click', function (e) {
      e.preventDefault();
      const textoEncriptado = document.getElementById('msg').value;
      const clave = 3; // Debe ser la misma clave utilizada para encriptar
      const textoDesencriptado = desencriptarTexto(textoEncriptado, clave);
      document.getElementById('msg').value = textoDesencriptado;
    });
  
    btnCopy.addEventListener('click', function () {
      const msgInput = document.getElementById('msg');
      msgInput.select();
      document.execCommand('copy');
      alert('Texto copiado al portapapeles');
    });
  
    function encriptarTexto(texto, clave) {
      return texto
        .split('')
        .map(function (char) {
          if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const letra = String.fromCharCode(((code - 97 + clave) % 26) + 97);
            return letra;
          } else {
            return char;
          }
        })
        .join('');
    }
  
    function desencriptarTexto(texto, clave) {
      return texto
        .split('')
        .map(function (char) {
          if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const letra = String.fromCharCode(((code - 97 - clave + 26) % 26) + 97);
            return letra;
          } else {
            return char;
          }
        })
        .join('');
    }
  });