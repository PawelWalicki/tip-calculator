let curActiveButton = null
let curActiveButtonNo = null
let mapBtnToValue = {
    1: 5,
    2: 10,
    3: 15,
    4: 25,
    5: 50,
}

function activateButton(btnNo) {
    if (curActiveButton) {
        curActiveButton.classList.remove("active")
    }
    let buttons = document.querySelectorAll(".selectTip button")
    buttons[btnNo - 1].classList.add("active")
    curActiveButton = buttons[btnNo - 1]
    curActiveButtonNo = btnNo
    console.log(`Btn number ${btnNo} is ${mapBtnToValue[btnNo]}%`)
}

function activateButtonCustom() {
    if (curActiveButton) {
        curActiveButton.classList.remove("active")
    }
    let buttons = document.querySelector(".selectTip button_custom")
    buttons.classList.add("active")
    curActiveButton = buttons
    console.log(buttons)
}

function countTipAndTotal() {
    let bill = document.querySelector(".bill_input").value
    let tipPercent = mapBtnToValue[curActiveButtonNo] / 100
    let persons = document.querySelector(".people_input").value

    if (bill && tipPercent && persons) {
        console.log(`Tip is ${bill * tipPercent} which is ${(bill * tipPercent) / persons} per person`)
    }
    if (bill && tipPercent && persons) {
        let tipSummary = bill * tipPercent;
         tipResult(tipSummary);
    }

    if (bill && tipPercent && persons) {
        let personSummary = (bill * tipPercent) / persons;
        personResult(personSummary);
    }
}

const tipResult = (tipSummary) => {
    let tipHTML =  document.querySelector(".tipResult");
    tipHTML.innerText = tipSummary.toFixed(2);
}


const personResult = (personSummary) => {
    let tipHTML = document.querySelector(".personResult");
    tipHTML.innerText = personSummary.toFixed(2);

}

const setResult = (result) => {
    const resultElement = document.querySelector(".js-result");

    resultElement.innerText = result.toFixed(2);
};



function reset() {
    document.querySelector(".bill_input").value = null
    document.querySelector(".people_input").value = null
    document.querySelector(".tipResult").innerText = null
    document.querySelector(".personResult").innerText = null
    document.querySelector(".button_custom").value = null
    
    if (curActiveButton) {
        curActiveButton.classList.remove("active")
    }
}

function cantBeZero() {
    const billElement = document.querySelector(".bill_input");
    const peopleElement = document.querySelector(".people_input");
    const bill = billElement.value;
    const people = peopleElement.value;
    

    if (bill < 0 || bill === 0) {
        billElement.value = null; 
        alert("bill cant be zero")
    }

    if (people < 0 || people === 0) {
        console.log(peopleElement.value)
        peopleElement.value = null;
        alert("people cant be zero")
    }
}

function countTipAndTotalCustom() {
    let bill = document.querySelector(".bill_input").value
    let tipCustom = document.querySelector(".button_custom") / 100
    let persons = document.querySelector(".people_input").value

    if (bill && tipCustom && persons) {
        console.log(`Tip is ${bill * tipCustom} which is ${(bill * tipCustom) / persons} per person`)
    }
    if (bill && tipCustom && persons) {
        let tipSummary = bill * tipCustom;
         tipResult(tipSummary);
    }

    if (bill && tipCustom && persons) {
        let personSummary = (bill * tipCustom) / persons;
        personResult(personSummary);
    }
}

