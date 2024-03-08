let quantidade = parseInt(prompt("Digite a quantidade de números na lista:"));
let array = [];

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    array.push(numero);
}

document.write("Números digitados: " + array.join(", ") + "<br>");

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

array = quicksort(array);

document.write("Array ordenado: " + array.join(", "));
