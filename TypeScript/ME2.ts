import PromptSync from 'prompt-sync';
const prompt = PromptSync();

type Cargo = 'Gerente' | 'Analista' | 'Asistente';

interface Empleado {
    nombre: string;
    edad: number;
    cargo: Cargo;
    expYrs: number;
    salary: number;
    Bonif: number;
}

let empleados: Empleado[] = []; // Aquí vamos guardando todos los empleados

let i: number = parseInt(prompt('Quieres calcular bonificaciones de un empleado?: Si= 1, No= 2 '));

while (i === 1) {
    let empleado: Partial<Empleado> = {}; // objeto temporal hasta llenarlo

    // Nombre
    while (true) {
        const nombre: string = prompt('Nombre del empleado: ');
        if (nombre.trim() === '') {
            console.log('Error: nulo o vacío');
            continue;
        }
        if (/^[a-zA-Z\s]+$/.test(nombre)) {
            empleado.nombre = nombre;
            break;
        } else {
            console.log("Solo se aceptan letras, no números ni símbolos.");
        }
    }
    // Edad
    while (true) {
        const edad: number = parseInt(prompt('Edad del empleado: '));
        if (edad >= 15 && edad <= 65) {
            empleado.edad = edad;
            break;
        } else {
            console.log('El empleado no cumple con la edad');
        }
    }
    // Cargo
    while (true) {
        const cargos: string = prompt('Cargo del empleado (Gerente/Analista/Asistente): ');
        const cargoValido: Cargo[] = ['Gerente', 'Analista', 'Asistente'];

        if (cargoValido.includes(cargos as Cargo)) {
            empleado.cargo = cargos as Cargo;
            break;
        } else {
            console.log('El cargo no es correcto');
        }
    }
    // Años de experiencia
    while (true) {
        const expYrs: number = parseInt(prompt('Años de experiencia del empleado: '));
        const minExp = (empleado.edad ?? 15) / empleado.edad - 1;
        const maxExp = (empleado.edad ?? 65) - 15;

        if (expYrs >= minExp && expYrs <= maxExp) {
            empleado.expYrs = expYrs;
            break;
        } else {
            console.log(`La experiencia debe estar entre ${minExp} y ${maxExp}`);
        }
    }
    // Salario
    while (true) {
        const salary: number = parseInt(prompt('Salario del empleado: '));
        if (salary >= 1623500) {
            empleado.salary = salary;
            break;
        } else {
            console.log('El salario debe ser positivo');
        }
    }
    // Bonificaciones
    while (true) {

        function aplicarPorcentaje(salary: number, porcentaje: number): number {
            return salary * porcentaje / 100
        }
        function aplicarPorcentajeBono(salary: number, porcentaje: number): number {
            return empleado.Bonif! - (empleado.Bonif! * porcentaje / 100)
        }
        if (empleado.cargo === 'Gerente') {
            const Salary = empleado.salary
            let bonoTotal: number | undefined;

            if (empleado.expYrs > 5) {
                empleado.Bonif = aplicarPorcentaje(Salary, 20)
                if (empleado.Bonif > 500000) { bonoTotal = empleado.Bonif = aplicarPorcentajeBono(empleado.Bonif, 10) }
            }

            console.log(empleado.Bonif);
            console.log(bonoTotal);


            if (empleado.expYrs >= 3 && empleado.expYrs <= 5) {
                empleado.Bonif = aplicarPorcentaje(Salary, 15)
            };
            if (empleado.expYrs < 3) { empleado.Bonif = aplicarPorcentaje(Salary, 10) };

        }
        else if (empleado.cargo === 'Analista') {

        }
        else if (empleado.cargo === 'Asistente') {

        }


        break;
    }

    // Guardamos el empleado ya validado en el array
    empleados.push(empleado as Empleado);

    console.log("Empleado registrado correctamente ✅");
    console.log(empleado);

    i = parseInt(prompt('Quieres calcular bonificaciones de otro empleado?: Si= 1, No= 2 '));
}

// Al final puedes ver todos los empleados ingresados
console.log("Lista de empleados:");
console.log(empleados);
