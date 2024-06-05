/*25.	Usar un proxy para la validación de los valores de propiedades
•	Cuando declaremos que el atributo es numérico solo perimimos que ingresen números
•	Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen letras
•	Cuando declaremos que el atributo es un email, solo permitimos que ingresen correos
•	Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen fechas
•	Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como al final de estos y 
se debe mostrar el error personalizado por consola*/


// Función para validar los diferentes tipos
function validate(type, value) {
    value = value.trim(); // Eliminar espacios en blanco al inicio y al final

    switch (type) {
        case 'numeric':
            if (!/^\d+$/.test(value)) {
                throw new Error('El valor debe ser numérico.');
            }
            break;
        case 'alphanumeric':
            if (!/^[a-zA-Z]+$/.test(value)) {
                throw new Error('El valor debe ser alfanumérico.');
            }
            break;
        case 'email':
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                throw new Error('El valor debe ser un email válido.');
            }
            break;
        case 'date':
            if (isNaN(Date.parse(value))) {
                throw new Error('El valor debe ser una fecha válida.');
            }
            break;
        default:
            throw new Error('Tipo de dato no válido.');
    }
    return value;
}

// Definimos nuestro objeto con un proxy
const data = {
    numericProp: '',
    alphanumericProp: '',
    emailProp: '',
    dateProp: ''
};

const typeMap = {
    numericProp: 'numeric',
    alphanumericProp: 'alphanumeric',
    emailProp: 'email',
    dateProp: 'date'
};

const proxyHandler = {
    set(target, prop, value) {
        if (prop in typeMap) {
            try {
                value = validate(typeMap[prop], value);
                target[prop] = value;
                return true;
            } catch (e) {
                console.error(`Error al establecer el valor de ${prop}: ${e.message}`);
                return false;
            }
        } else {
            target[prop] = value;
            return true;
        }
    }
};

const proxy = new Proxy(data, proxyHandler);

// Pruebas
try {
    proxy.numericProp = '123'; // Correcto
    proxy.alphanumericProp = 'abc'; // Correcto
    proxy.emailProp = 'test@example.com'; // Correcto
    proxy.dateProp = '2024-06-05'; // Correcto

    console.log(proxy);

    // Pruebas con errores
    proxy.numericProp = 'abc'; // Error
    proxy.alphanumericProp = '123'; // Error
    proxy.emailProp = 'invalid-email'; // Error
    proxy.dateProp = 'invalid-date'; // Error
} catch (e) {
    console.error(e.message);
}
