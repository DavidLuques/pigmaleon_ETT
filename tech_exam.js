let vars = [3, 4, 64, 23, -3];

function canBeFormerByTwoNumbers(num, vars) {
    for (let i = 0; i < vars.length; i++) {
        for (let j = 0; j < vars.length; j++) {
            if (vars[i] + vars[j] === num && i!=j){
                return true;
            }
        }
    }
    return false;
}

console.log(canBeFormerByTwoNumbers(1, vars)); // true (-3 + 4)
