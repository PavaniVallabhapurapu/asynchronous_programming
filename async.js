function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data")
            resolve("success")
        }, 4000)
    })
}
console.log("fetching data")
let p1 = asyncFunc()
p1.then((res) => {
    console.log(res)
})