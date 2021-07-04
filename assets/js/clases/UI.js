import { INPUT_INFO } from '../selectores.js';

class UI {
    mostrarResultado(monto = 0, comision = 0, accion) {
        
        INPUT_INFO.forEach(input => {
            const ACCION = input.getAttribute('data-accion');
            if (ACCION === accion) {
                if (input.getAttribute('data-info') === 'comision') {
                    input.value = String(comision).substr(0, 4);
                } else {
                    input.value = String(monto).substr(0, 4);
                }
            }
        })

    }
}

export default UI;