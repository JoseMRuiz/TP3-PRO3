const valor1 = document.getElementById("numero1")
const valor2 = document.getElementById("numero2")
const operacion = document.getElementById("operacion")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")


operacion.addEventListener ("change",() =>{
    if(operacion.value == "division"){
        calcular.disabled = true
    }else{
        calcular.disabled = false
    }
})

calcular.addEventListener("click",()=>{

    const valor1= parseFloat(numero1.value);
    const valor2= parseFloat(numero2.value);
    let res;


    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent="ingrese numero valido";
        return
    }
    


    switch(operacion.value){
        case "suma":
            res=valor1+valor2;
        break;
        case "resta":
            res=valor1-valor2;
        break;
        case "multiplicacion":
            res=valor1*valor2;
        break;
        default:
            res = "no puede realizar"  
    }
    resultado.textContent =  `resultado: ${res}`;

})