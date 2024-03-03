

const URL = 'https://cat-fact.herokuapp.com/facts'
const factpara = document.querySelector('#fact')
const btn = document.querySelector("#btn")

const getdata = async () =>{
    console.log("getting data .....")
let response = await  fetch(URL)
console.log(response)
let data = await response.json()
console.log(data[0].text)
factpara.innerHTML = data[0].text
}


// function create() { 
//             let div = document.createElement('div'); 
//             div.textContent = "Geeksforgeeks"; 
//             div.setAttribute('class', 'note'); 
//             document.body.appendChild(div); 
//             console.log()
//         } 

//         create()
   