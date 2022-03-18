let A = [1, 2, 3]
let B = [2, 4]

function getTotal() {
    let result = B.map(BItem => A.filter(AItem => BItem >= AItem).length)
    console.log('answer: ', result)
}

getTotal()