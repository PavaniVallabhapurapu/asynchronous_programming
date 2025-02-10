// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     reject("some erroe occurred")
// })

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data", dataId)
            resolve("success")
            if(getNextData){
                getNextData
            }
    
        }, 2000)
    })
}
let promise = getData(123)
console.log(getData(promise))