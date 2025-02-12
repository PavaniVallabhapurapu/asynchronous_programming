
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("Data fetched")
            } else {
                reject("Error fetching data")
            }
        }, 2000)
    })
}

fetchData()
    .then((message) => {
        console.log("promise " , message)
    })
    .catch((error) => {
        console.log(error)
    })
