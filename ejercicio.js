let edad = edad => {
    if (edad >=18) {
      return `eres mayor de edad`
    }
      else if (edad <= 18) {
      return `eres menor de edad`
    }
      else  if (edad >=60) {
        return ` eres mayor de edad y estas en la tercera edad`
      }
  }

  const presentacion = (name, lastname, edad) => {
    return `Hola ${name} ${lastname} ${edad}`
  }

  presentacion ('lucas', 'Paternoster', edad (70))
