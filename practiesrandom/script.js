// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((element)=>{
//     return element >2;
// })
// console.log(newArr);


const API = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(API)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`Request failed with status ${response.status}`);
//         }

//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("API request failed:", error);
//     })
//     .finally(() => {
//         console.log("API call completed");
//     });

    fetch(API).then((response)=>{
        response.json().then(()=>{
            console.log("API call completed");
        })
    }).catch((ere)=>{
        console.error("API request failed:", ere);
    }).finally(()=>{
        console.log("API call completed");
    });   