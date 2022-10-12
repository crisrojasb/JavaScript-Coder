const creditos = [
    { id: 1, nombre: "Nacional",      tipo: "viaje",    montoMax: 2500000,  interes: 1.08},
    { id: 2, nombre: "Internacional", tipo: "viaje",    montoMax: 4000000,  interes: 1.09},
    { id: 3, nombre: "Publica",       tipo: "estudio",  montoMax: 2800000,  interes: 1.04},
    { id: 4, nombre: "Privada",       tipo: "estudio",  montoMax: 3200000,  interes: 1.06},
    { id: 5, nombre: "Carro",         tipo: "vehiculo", montoMax: 20000000, interes: 1.09},
    { id: 6, nombre: "Moto",          tipo: "vehivulo", montoMax: 12000000, interes: 1.11},
    { id: 7, nombre: "Libre",         tipo: "libre",    montoMax: 5000000,  interes: 1.13}
];

let filtro="";

creditos.filter((el)=>{
    if (el.tipo === "viaje") {
        filtro += "\nViaje "+el.nombre+" - Monto Máximo: "+el.montoMax;
    }
    return filtro;
})

console.log(filtro);