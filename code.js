document.addEventListener("DOMContentLoaded", myFunction)

function myFunction () {
    console.log('hi')
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const plus_button = document.getElementsByTagName("button")[0]
    const subtraction_button = document.getElementsByTagName("button")[1]
    const multiplication_button = document.getElementsByTagName("button")[2]
    const division_button = document.getElementsByTagName("button")[3]
    const result = document.getElementById("res")
    plus_button.addEventListener("click", mySum)
    subtraction_button.addEventListener("click",mySub)
    multiplication_button.addEventListener("click", myMult)
    division_button.addEventListener("click", myDiv)

    function mySum() {
        console.log('call mySum')
        value1 = Number(num1.value)
        value2 = Number(num2.value)
        sm = value1 + value2
        // console.log(sm)
        result.textContent = sm     
    }
    function mySub() {
        console.log('call mySub')
        value1 = Number(num1.value)
        value2 = Number(num2.value)
        sm = value1 - value2
        // console.log(sm)
        result.textContent = sm     
    }
    function myMult() {
        console.log('call myMult')
        value1 = Number(num1.value)
        value2 = Number(num2.value)
        sm = value1 * value2
        // console.log(sm)
        result.textContent = sm     
    }
    function myDiv() {
        console.log('call myDiv')
        value1 = Number(num1.value)
        value2 = Number(num2.value)
        sm = value1 / value2
        // console.log(sm)
        result.textContent = sm     
    }
}