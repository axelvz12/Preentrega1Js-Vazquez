//Calcular nota final de alumnos ingresados

let trueOrFalse = true
while(trueOrFalse){
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");
    const parcial = parseFloat(prompt("Parcial"));
    const final = parseFloat(prompt("Final"));
    const nota = (parcial+final)/2;

    if(nombre && apellido == "ESC"){
        alert("El alumno no asistio al final");
        trueOrFalse = false;
    } else if(nota >= 10){
        alert(`La nota final de ${nombre} ${apellido} es ${nota} Aprobado`);
        trueOrFalse = false
    }
    else{
        alert(`La nota final de ${nombre} ${apellido} es ${nota} Desaprobado`)
        trueOrFalse = false
    }
}
