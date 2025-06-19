function canBeFormerByTwoNumbers(nums, sumaBuscada) {
// numeros ya vistos.
    const numerosVistos = new Set();

  for (const num of nums) {
    const complemento = sumaBuscada - num;
//aca verifico si el complemento existe en los numeros vistos
    if (numerosVistos.has(complemento)) {
      return true;
    }

    // Si no, guardo el numero actual para comprobar luego.
    numerosVistos.add(num);
  }

  return false; //fin del array entonces false
}

const numeros = [1, 3, 4, 4];
const suma = 8;

console.log(canBeFormerByTwoNumbers(numeros, suma)); 
