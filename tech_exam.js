//creo array aleatorio
let vars = [3, 4, 64, 23, -3];

function canBeFormerByTwoNumbers(num, vars) {
    for (let i = 0; i < vars.length; i++) {
        for (let j = 0; j < vars.length; j++) {
            if (vars[i] + vars[j] === num && i!=j){ // en este caso considero que el mismo numero no puede sumarse a si mismo, sino que necesita 2 elementos del array
                return ` Hay 2 elementos quesuman ese numero! el ${vars[i]} y el ${vars[j]}`;
            }
        }
    }
    return `No hay 2 elementos que sumados den el numero que ingresaste`;
}

const numToSearch=5; 

console.log(canBeFormerByTwoNumbers(numToSearch, vars));

