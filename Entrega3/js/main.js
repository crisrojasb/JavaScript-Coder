/// Simulador Crédito Bancario

// Array de objetos
const creditos = [
    { id: 1, codigo: 11, nombre: "Nacional",      tipo: "viaje",    montoMax: 2500000,  interes: 1.08},
    { id: 2, codigo: 12, nombre: "Internacional", tipo: "viaje",    montoMax: 4000000,  interes: 1.08},
    { id: 3, codigo: 21, nombre: "Post-grado",    tipo: "estudio",  montoMax: 2800000,  interes: 1.06},
    { id: 4, codigo: 22, nombre: "Maestria",      tipo: "estudio",  montoMax: 3200000,  interes: 1.06},
    { id: 5, codigo: 31, nombre: "Carro",         tipo: "vehiculo", montoMax: 20000000, interes: 1.11},
    { id: 6, codigo: 32, nombre: "Moto",          tipo: "vehiculo", montoMax: 12000000, interes: 1.11},
    { id: 7, codigo: 41, nombre: "Libre",         tipo: "libre",    montoMax: 5000000,  interes: 1.13}
];

// Variables
let activo = true, opcion, opcion2, filtrar;

// Menú
/* do {
    opcion = parseInt(prompt("Bienvenido a su sistema de Crédito Bancario\nQué tipo de crédito busca?\nSeleccione una opción valida del siguiente menú:\n1. Para Viajes\n2. Estudios\n3. Nuevo vehículo\n4. Libre inversión\n5. Ver todos\n6. Finalizar solicitud\nIngrése opción del menú:",""));

    filtrar = solicitud(opcion);
    
    if (filtrar !== null) {
        opcion2 = parseInt(prompt("Seleccione el crédito que desea adquirir:\n" + filtrar,""));
        
    }
} while (activo == true); */

// Funciones
function solicitud(opc) {
    let filtro="", tipoCrt="", cont=0;
    switch (opc) {
        case 1:
            tipoCrt="viaje";
            break;
        case 2:
            tipoCrt="estudio";
            break;
        case 3:
            tipoCrt="vehiculo";
            break;
        case 4:
            tipoCrt="libre";
            break;
        case 5:
            tipoCrt="todo";
            break;
        case 6:
            //alert("Transacción finalizada. Feliz día!");
            activo = false;
            return null;
            break;
        default:
            if (opcion < 1 || opcion > 6) {
                //alert("Opción no valida\nSolicitud finalizada");
                activo = false;
            }
            return null;
            break;
    }

    creditos.filter((el)=>{
        if (el.tipo === tipoCrt || tipoCrt === "todo") {
            cont++;
            filtro += cont + ". " + el.tipo + " " + (el.tipo === "libre" ? "Inversión" : el.nombre) + " - Monto Máximo: " + el.montoMax + "\n";
        }
    })
    
    return filtro;
}

//Evento Listener
class Credito {
    constructor (valor, meses){
        this.valor = valor;
        this.meses = meses;
    }
}

const arrayCreditos = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    const valor = document.getElementById("valor");
    const meses = document.getElementById("meses");
    console.log("El valor ingresado es: " + valor.value);
    console.log("Meses ingresados: " + meses.value);
    console.log("Formulario enviado");

    //Creación de objeto Credito:
    const credito = new Credito(valor.value, meses.value);
    arrayCreditos.push(credito);

    //Verificación por consola
    console.log(arrayCreditos);
})

//Set Storage
function almacenamiento(x) {
    localStorage.setItem("tipo", x);
}

//Get Storage
let tea = localStorage.getItem("tipo");
let intereses;

for (let interes of creditos) {
    if (interes.tipo == tea){
        intereses = interes.interes;
        document.getElementById("pagoMes").value = "$ " + (((intereses + 0.015) * document.querySelector(".cantidad").value) / document.getElementById("meses-select").value);
        document.getElementById("TEA").value = intereses + "%";
        document.getElementById("VTU").value = (intereses + 0.015) + "%";
        document.getElementById("total").value = "$ " + ((intereses + 0.015) * document.querySelector(".cantidad").value);
    }
}

//Actualizar datos
const btn = document.getElementById("btn");

btn.onclick = ()=> {
    document.getElementById("pagoMes").value = "$ " + (((intereses + 0.015) * document.querySelector(".cantidad").value) / document.getElementById("meses-select").value);
    document.getElementById("total").value = "$ " + ((intereses + 0.015) * document.querySelector(".cantidad").value);
}