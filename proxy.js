
const user = {
  first_name: "",
  last_name: "",
  age: 0
}

let soloLetras = /
//function handler
const handler = {
  set: function(objeto, propiedad, valor){
    if (propiedad === "age" && typeof valor === "number"){
      if (valor >= 18) {
          objeto[propiedad] = valor
      }
    }
    if ((propiedad === "first_name" || propiedad === "last_name") && (soloLetras.test(valor))) {
      objeto[propiedad] = valor
    }
  },
  get(objeto, propiedad) {
    
  
  }
}