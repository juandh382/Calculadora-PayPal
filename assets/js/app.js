// Imports
import Calculadora from "./clases/Calculadora.js";
import UI from "./clases/UI.js";
import { INPUTS, INPUT_AGREGADO, INPUT_PORCENTAJE } from './selectores.js';


// Variables

const
    ui = new UI(),
    CALCULADORA = new Calculadora();

// Event Listeners
INPUTS.forEach(input => input.addEventListener('input', calcular));
INPUT_AGREGADO.addEventListener('input', cambiarComision);
INPUT_PORCENTAJE.addEventListener('input', cambiarComision);

// Funciones

function calcular(e) {
    const
        MONTO = Number(e.target.value),
        ACCION = e.target.getAttribute('data-accion');

    CALCULADORA.setAccion(ACCION);

    const
        RESULTADO = CALCULADORA.calcularTotal(MONTO),
        COMISION = CALCULADORA.getComision();


    ui.mostrarResultado(RESULTADO, COMISION, ACCION);
}

function cambiarComision(e) {
    const
        VALOR = Number(e.target.value),
        dato = e.target.id;

    if (dato === 'porcentaje') {
        CALCULADORA.setPorcentaje(VALOR);
    } else {
        CALCULADORA.setAgregado(VALOR);
    }

}