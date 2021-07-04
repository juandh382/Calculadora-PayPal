// Imports
import Calculadora from "./clases/Calculadora.js";
import UI from "./clases/UI.js";
import { INPUTS, INPUTS_COMISIONES } from './selectores.js';


// Variables
const
    ui = new UI();

    // Event Listeners
    INPUTS.forEach(input => input.addEventListener('input', calcular));

// Funciones

function calcular(e) {
    const
        MONTO = Number(e.target.value),
        ACCION = e.target.getAttribute('data-accion'),
        CALCULADORA = new Calculadora(ACCION),
        RESULTADO = CALCULADORA.calcularTotal(MONTO),
        COMISION = CALCULADORA.getComision();


    ui.mostrarResultado(RESULTADO, COMISION, ACCION);
}