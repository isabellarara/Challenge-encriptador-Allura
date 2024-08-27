let textArea = document.querySelector(".texto_ingresa");
let mensaje = document.querySelector(".texto_encriptado");


/* llaves de encriptacion
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function botonEncriptar()
{
    const txEncriptado = encriptacion(textArea.value);
    mensaje.value = txEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function botonDesencriptar()
{
    const txDesencriptado = desencriptacion(textArea.value);
    mensaje.value = txDesencriptado;
    textArea.value = "";    
}

function botonCopiar()
{
    const txCopia = (mensaje.value);
    textArea.value = txCopia;
    mensaje.value = "";
    
}

function encriptacion(stringEncriptado)
{
    let encriptador = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]; 
        
    stringEncriptado = stringEncriptado.toLowerCase();
       

    for(let i = 0; i < encriptador.length; i++)
    {
          if(stringEncriptado.includes(encriptador[i][0]))
          {
            stringEncriptado = stringEncriptado.replaceAll(encriptador[i][0], encriptador[i][1])
          }
    }
    return stringEncriptado;
}

function desencriptacion(stringDesencriptado)
{
    let encriptador = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]; 
        
    stringDesencriptado = stringDesencriptado.toLowerCase();
       

    for(let i = 0; i < encriptador.length; i++)
    {
          if(stringDesencriptado.includes(encriptador[i][1]))
          {
            stringDesencriptado = stringDesencriptado.replaceAll(encriptador[i][1],encriptador[i][0])
          }
    }
    return stringDesencriptado;
}

