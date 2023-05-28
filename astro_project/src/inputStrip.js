export function sanitise(input) {
    var inputStr = input 
    var pattern = /[<>*/?$]/i
    var result = pattern.test(inputStr)

    if (result) {
        return false
    }
    else {
        return true
    }
}