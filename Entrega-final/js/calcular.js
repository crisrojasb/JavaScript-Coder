//Evento Listener
class Credito {
    constructor (valor, meses, tea){
        this.valor = valor;
        this.meses = meses;
        this.tea = tea;
    }

    calcularCreditoMes() {
        let mensual = parseFloat((this.valor * (this.tea + 0.015)) / this.meses);
        // alert(parseFloat(mensual));
        return mensual.toFixed(2);
    }

    calcularCreditoTotal() {
        let total = parseFloat(this.valor * (this.tea + 0.015));
        return total.toFixed(2);
    }
}

//Subtítulo - Tipo de crédito
document.getElementById("titulo-tipo").value = localStorage.getItem("tipo");

//Array con objetos Credito
const arrayCreditos = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    //Evita recargar la página
    e.preventDefault();

    const valor = document.querySelector(".cantidad").value;
    const meses = document.getElementById("meses-select").value;
    const tea = document.getElementById("TEA").value; //Tasa Efectiva Anual

    // alert(valor + " - " + meses + " - " + tea);

    //Creación de objeto Credito:
    const credito = new Credito(valor, meses, parseFloat(tea));

    //Agrega objetos al arrayCreditos
    arrayCreditos.push(credito);

    //Guarda datos en el localStorage
    localStorage.setItem("Credito", JSON.stringify(arrayCreditos));

    cargarInfo(credito);

    //Toastify JS
    Toastify({
        text: "Calculo exitoso!",
        duration: 1500,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();

    //Verificación por consola
    // console.log(arrayCreditos);
})

//Actualizar datos
const valorMensual = document.getElementById("valor-texto");
const totalText = document.getElementById("total-text");
const totalValor = document.getElementById("total-valor");
// const btn = document.getElementById("btn");

// btn.onclick = ()=> {
const cargarInfo = (credito) => {
    let aux1 = "", aux2 = "", aux3 = "";
    // alert(credito.calcularCreditoMes());
    
    aux1 += `<input type="text" id="pagoMes" maxlength="10" readonly> $ ${credito.calcularCreditoMes()}
             <span>COP / mes</span>`;
    aux2 += `Sumando capital, intereses, seguro de vida y gastos, en total pagarás:`;
    aux3 += `<input type="text" id="total" maxlength="10" readonly> $ ${credito.calcularCreditoTotal()}
             <span>COP</span>`;

    // console.log(credito);
    // alert(aux1);

    valorMensual.innerHTML = aux1;
    totalText.innerHTML = aux2;
    totalValor.innerHTML = aux3;
}

//Get Storage
let tea = localStorage.getItem("tipo");
let intereses;

//fetch
fetch('../js/creditos.json')
.then(response => response.json())
.then(datos => {
    // console.log(datos);
    for (let interes of datos) {
        if (interes.tipo === tea){
            intereses = interes.interes;
            // alert(intereses);
            document.getElementById("TEA").value = intereses;
            document.getElementById("VTU").value = (intereses + 0.015).toFixed(3);
        }
    }
})