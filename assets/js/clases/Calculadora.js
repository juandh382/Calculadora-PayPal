class Calculadora {

    constructor(accion = 'enviar') {
        this.accion = accion;
        this.comision = 0;
    }

    // Calcula el monto total a recibir o enviar 
    setComision(enviar = 0, recibir = 0) {
        this.comision = recibir - enviar;
    }

    getComision() {
        return this.comision;
    }

    calcularTotal(monto = 0) {
        if (!isNaN(monto)) {

            let total = 0;
            switch (this.accion) {
                case 'recibir':
                    total = (monto * 5.4 / 100) + 0.30 + monto;
                    this.setComision(monto, total);
                    break;
                case 'enviar':
                    total = (monto - 0.30) / (1 + 5.4 / 100);
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