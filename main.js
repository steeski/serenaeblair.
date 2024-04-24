//alert('Bom dia povoo');
var nomeUsuario = '';
var texto = document.querySelector('span');

while(nomeUsuario == '' ) {
    nomeUsuario = prompt('Qual seu nome??');
}

if (nomeUsuario == null){ 
  texto.textContent = 'Usuario';
} else { 
    texto.textContent = nomeUsuario;
}