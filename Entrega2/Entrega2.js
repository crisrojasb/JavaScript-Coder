// Simulador Crédito Bancario
let sueldo = 100000, activo = true, opcion;


do {
    // menú
    opcion = parseInt(prompt("Bienvenido a su sistema de cajero automático\nSeleccione una opción valida del siguiente menú:\n1. Retirar dinero de su cuenta\n2. Ver el valor actual de su cuenta\n3. Ingresar dinero a su cuenta\n4. Finalizar transacción\nIngrése opción del menú:",""));

    if (opcion == 2) {
        alert("Usted tiene en su cuenta: $" + sueldo);
    } else {
        if (opcion == 4) {
            alert("Transacción finalizada. Feliz día!");
            activo = false;
        } else {
            if (opcion < 1 || opcion > 3) {
                alert("Opción no valida\nTransaccion finalizada");
                activo = false;
            } else {
                transaccion(opcion);
            }
        }
    }
} while (activo == true);

function transaccion(opc) {
    switch (opc) {
        case 1:
            sueldo = sueldo - parseInt(prompt("Cuanto dinero desea retirar?",""));
            alert("Retiro realizado con éxito!");
            break;
        case 3:
            sueldo = sueldo + parseInt(prompt("Cuanto dinero desea ingresar?",""));
            alert("Ingreso de dinero realizado con éxito!");
            break;
        default:
            alert("opc no valida");
    }
}