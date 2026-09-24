const CHECKOUT_URL = "COLE_AQUI_O_LINK_DO_CHECKOUT_R37";
document.querySelectorAll(".checkout").forEach(a=>a.addEventListener("click",e=>{
 if(CHECKOUT_URL.startsWith("COLE_")){e.preventDefault();alert("Falta apenas inserir no script.js o link exato do checkout de lançamento de R$37.");}
 else a.href=CHECKOUT_URL;
}));