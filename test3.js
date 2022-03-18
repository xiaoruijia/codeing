//用数组模拟堆栈
let array = [1, 2, 3, 4, 5, 3]

function push(v) {
    array = [v, ...array]
    console.log("栈顶部值:", array[0])
}

function pop() {
    let [, ...b] = array
    array = b
    console.log("栈顶部值:", array[0])
}

function inc(position, value) {
    let result = []
    array.forEach(item => {
        result.push(item)
        if (position === item) {
            result.push(value)
        }
    })
    console.log(result, "inc success")
    return result
}

push(3)
pop()
inc(3, 6)
