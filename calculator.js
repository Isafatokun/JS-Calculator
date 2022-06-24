function calculator(first_number, second_number, operation) {
    if (operation === "+") {
        result = first_number + second_number
    } else if (operation === "-") {
        result = first_number - second_number
    } else if (operation === "/") {
        result = first_number / second_number
    } else if (operation === "m") {
        result = first_number * second_number
    } else if (operation === "%") {
        result = first_number % second_number
    }
    alert("The answer is", result)
}

alert("Welcome to the JS calculator")
let f = Number(prompt("Enter first Number"))
let o = prompt("Enter Operation (+ - / * %)")
let s = Number(prompt("Enter second Number"))
a = calculator(f, s, o)