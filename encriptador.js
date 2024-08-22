//seleccion de los  elementos principales

const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//definimos boton de encriptar


btnEncriptar.addEventListener("click", e=>{

    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){

        aviso.style.background = "#0A3861";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no puede estar vacio, por favor";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.textContent = "Solo letras minúsculas y sin acentos, por favor";
        },1500);

    }

    else if(texto !== txt){

        aviso.style.background = "#0A3861";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos y caracteres especiales, por favor";
        
        setTimeout(()=>{

            aviso.removeAttribute("style");
            aviso.textContent = "Solo letras minúsculas y sin acentos, por favor";

        },1500);
    }

    else if(texto !== txt.toLowerCase()){

        aviso.style.background = "#0A3861";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas, por favor";
        
        setTimeout(()=>{

            aviso.removeAttribute("style");
            aviso.textContent = "Solo letras minúsculas y sin acentos, por favor";

        },1500);
    }

    else{

        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

    //boton desencrptar
btnDesencriptar.addEventListener("click", e=>{

    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    textEncriptar.value = '';
    respuesta.textContent = '';
    
    if(texto == ""){

        aviso.style.background = "#0A3861";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio, por favor";
        
        setTimeout(()=>{

            aviso.removeAttribute("style");

        },1500);
    }

   
    //condicionales para Ñ y  ñ mayuscula  minuscula

    else if(texto !== txt && !/^[ñÑ]*$/.test(texto.replace(/[^ñÑ]/g, ''))){
        aviso.style.background = "#0A3861";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El textp no debe tener acentos y caracteres especiales, por favor";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.textContent = "Solo letras minúsculas y sin acentos, por favor";
        },1500);
    }

   
    else if(texto !== texto.toLowerCase()){

        aviso.style.background = "#0A3861";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula por favor";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.textContent = "Solo letras minúsculas y sin acentos, por favor";
        },1500);
    }

    else {

        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/ai/mg, "a");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 

        }
    
});

//funcion boton copiar
btnCopiar.addEventListener("click", e=>{

    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
    

});
