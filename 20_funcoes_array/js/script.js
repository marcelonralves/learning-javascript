//length - tamanho do array
var arr = [1,2,3,4,5,6];
console.log(arr.length);

//push - adicionar item ao array
arr.push(7);
arr.push('marcelo')
console.log(arr);

//pop - remover último item do array
arr.pop();
console.log(arr);

//unshift - adicionar item no começo do array
arr.unshift(0);
console.log(arr)

//shift - remover o primeiro item do array
arr.shift();
console.log(arr);

//acessar o último elemento do array
console.log(arr[arr.length -1])

//isArray - verificar se é um array
console.log(Array.isArray(2))
console.log(Array.isArray(arr))

//splice - escolher a posição em que deseja adicionar ou remover um item

    //adicionar
    arr.splice(3,0,19119)
    console.log(arr)

    //remover
    arr.splice(3,1);
    console.log(arr);

//indexOf - ver a posição do item
console.log(arr.indexOf(2))

//join - reunir o array para a string
var arr2 = ["o", "cachorro", "bebe", "muita", "agua"];
console.log(arr2);
console.log(arr2.join(" "));

//reverse - reverter um array
console.log(arr2.reverse());