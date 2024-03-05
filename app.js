const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_1lE2Q7BTWRoSDpXrkdOnaXO5NnUzFaP7gi3dvWN6"

const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")

for (let select of dropdown) {
    for (currancyconverter in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currancyconverter
        newOption.value = currancyconverter


        if (select.name === "from" && currancyconverter === "USD") {
            newOption.selected = "selected"
        }
        else if (select.name === "to" && currancyconverter === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption)
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}


const updateFlag = (element) => {
    let currancyconverter = element.value
    // console.log(currancyconverter)
    let = countryCode = countryList[currancyconverter]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault()
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value
    //   console.log(amtVal)
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1"
    }


    // console.log(fromCurr.value , toCurr.value)
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`

    let response = await fetch(BASE_URL)
    // console.log(response);
    let data = await response.json()
  let rate = data[toCurr.value.toLowerCase()];
// console.log(rate)

    let finalAmount = amtVal * rate ;
msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});








