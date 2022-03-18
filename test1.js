//U = arr[1]×arr[2]×(1÷arr[3])×arr[4]×...×arr[n-1] × (1÷arr[n]) n=奇数
//U = arr[1]×arr[2]×(1÷arr[3])×arr[4]×...×(1÷arr[n-1]) × arr[n] n=偶数
//思路：奇数都是其倒数，偶数为其本身，因此要让U值最大，所以要让大数在偶数位，并且保证从小到大排序。
let array = [1, 2, 3, 4]

function demo(arr) {
    let U = []
    let result = 1
    let ArrMiddleIndex = Math.floor(arr.length / 2)
    let maxNumber = []
    let minNumber = []
    arr.sort(
        function (n1, n2) {
            return n1 - n2;
        });
    if (arr.length % 2 === 0) {
        minNumber = arr.slice(0, ArrMiddleIndex)
        maxNumber = arr.slice(ArrMiddleIndex)
    } else {
        minNumber = arr.slice(0, ArrMiddleIndex + 1)
        maxNumber = arr.slice(ArrMiddleIndex + 1)
    }
    //最小数组一定比最大的多1,Max数组有可能有undefined的情况
    minNumber.forEach((item, index) => {
        U.push(minNumber[index])
        maxNumber[index] && U.push(maxNumber[index])
    })
    U.forEach((item, index) => {
        if (index % 2 === 0) {
            result = result * (1 / item)
        } else {
            result = result * item
        }
    })

    console.log('U排序：', U, '---result计算结果：', result)
}

demo(array)