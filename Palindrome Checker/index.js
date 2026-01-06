const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reversed = reverseString(value)
    
    if (value === reversed) {
        alert("É um palíndromo! ✓")
    } else {
        alert("Não é um palíndromo. ✗")
    }

    input.value = ""
}