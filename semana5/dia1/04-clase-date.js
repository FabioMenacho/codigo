// Clase date para manejar fechas
let hoy = new Date();
console.log(hoy);

// para obtener el año
console.log(`Año actual: ${hoy.getFullYear()}`);

// Obtener el mes actual
// Enero: 0
// Diciembre 11
console.log(`Mes actual: ${hoy.getMonth()+1}`);

// Obtener el día del mes
console.log(`Dia del mes: ${hoy.getDate()}`);

// Obtener las horas, minutos y segundos
console.log(`Hora actual: ${hoy.getHours()}`);
console.log(`Minuto actual: ${hoy.getMinutes()}`);
console.log(`Segundo actual: ${hoy.getSeconds()}`);

const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log(`Día de la semana: ${dias[hoy.getDay()]}`);

let diaDelPadre = new Date (2021,5,20,0,0,0);
console.log(`El día del padre es:`);
console.log(`${dias[diaDelPadre.getDay()]}`);
