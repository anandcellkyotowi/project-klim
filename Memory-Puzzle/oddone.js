var array = [parseInt((Math.random() * 10), 10), parseInt((Math.random() * 10), 10), parseInt((Math.random() * 10), 10), parseInt((Math.random() * 10), 10), parseInt((Math.random() * 10), 10)]
console.log(array)

for (let i = 0; i < array.length; i++) {
    for (let a = i + 1; a < array.length; a++) {
        if (array[i] == array[a]) {
            array.splice(i, 1)
        }
    }
}
console.log(array)