import { roundToTwo } from '../helpers/funciones.js';

class Calculadora {

    constructor() {
        this.accion = 'enviar';
        this.comision = 0;
        this.porcentaje = 5.4;
        this.agregado = 0.30;

    }
    // Setters
    setAccion(accion) {
        this.accion = accion;
    }

    setComision(enviar = 0, recibir = 0) {
        this.comision = recibir - enviar;
    }

    setPorcentaje(porcentaje) {
        this.porcentaje = porcentaje;
    }

    setAgregado(agregado) {
        this.agregado = agregado;
    }

    // getters
    getComision() {
        return this.comision;
    }

    getPorcentaje() {
        return this.porcentaje;
    }

    getAgregado() {
        return this.agregado;
    }
    
    // Calcula el monto total a recibir o enviar 
    calcularTotal(monto = 0) {
        
        if (!isNaN(monto)) {

            const 
                PORCENTAJE = this.getPorcentaje(),
                AGREGADO = this.getAgregado();

            let total = 0;
            switch (this.accion) {
                case 'recibir':
                    total = roundToTwo((monto * PORCENTAJE / 100) + AGREGADO + monto);
                    this.setComision(monto, total);
                    break;
                case 'enviar':
                    total = roundToTwo((monto - AGREGADO) / (1 + PORCENTAJE / 100));
                    this.setComision(total, monto);
                    break;
            
                default:
                    break;
            }


            return total;
        } else {
            console.error('Los datos no son validos');
        }
    }

}

export default Calculadora;