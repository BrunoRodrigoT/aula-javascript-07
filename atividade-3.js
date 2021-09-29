//Questão 1

let txt = 'Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.'
console.log(txt.length)
console.log(txt.toUpperCase())
console.log(txt.toLowerCase())
console.log(txt.search('humanidade'))

//Questão 2 

let array = [ ];

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        array.push(i)
    }
}
console.log(array.toString())