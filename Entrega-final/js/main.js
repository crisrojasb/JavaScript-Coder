/** Simulador Crédito Bancario **/

//Array de objetos
/* const creditos = [
    { id: 1, codigo: 11, nombre: "Nacional",      tipo: "viaje",    montoMax: 2500000,  interes: 1.08},
    { id: 2, codigo: 12, nombre: "Internacional", tipo: "viaje",    montoMax: 4000000,  interes: 1.08},
    { id: 3, codigo: 21, nombre: "Post-grado",    tipo: "estudio",  montoMax: 2800000,  interes: 1.06},
    { id: 4, codigo: 22, nombre: "Maestria",      tipo: "estudio",  montoMax: 3200000,  interes: 1.06},
    { id: 5, codigo: 31, nombre: "Carro",         tipo: "vehiculo", montoMax: 20000000, interes: 1.11},
    { id: 6, codigo: 32, nombre: "Moto",          tipo: "vehiculo", montoMax: 12000000, interes: 1.11},
    { id: 7, codigo: 41, nombre: "Libre",         tipo: "libre",    montoMax: 5000000,  interes: 1.13}
]; */

//Set Storage
function almacenamiento(x) {
    localStorage.setItem("tipo", x);
}

//Get Storage
/* let tea = localStorage.getItem("tipo");
let intereses;

for (let interes of creditos) {
    if (interes.tipo === tea){
        intereses = interes.interes;
        // document.getElementById("pagoMes").value = "$ " + (((intereses + 0.015) * document.querySelector(".cantidad").value) / document.getElementById("meses-select").value).toFixed(2);
        // alert(intereses);
        document.getElementById("TEA").value = intereses;
        document.getElementById("VTU").value = intereses + 0.015;
        // document.getElementById("total").value = "$ " + ((intereses + 0.015) * document.querySelector(".cantidad").value).toFixed(2);
    }
} */

//Limpiar Storage
/* function limpiarStorage() {
    // alert("carga");
    localStorage.clear();
} */