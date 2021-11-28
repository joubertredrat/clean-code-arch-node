exports.validate = function (str) {
    if (str == null || str == undefined) {
        return false
    }
    str = str.replace(/\D/g, "");
    if (str.length != 11) {
        return false
    }

    numbers = str.split("").map((value) => parseInt(value))
    sum = 0
    for (i = 0, j = 10; i < 9; i++, j--) {
        sum += (numbers[i] * j)
    }
    rest = sum % 11
    digit1 = rest >= 2 ? 11 - rest : 0
    if (numbers[9] != digit1) {
        return false;
    }

    sum = 0
    for (i = 0, j = 11; i < 10; i++, j--) {
        sum += (numbers[i] * j)
    }
    rest = sum % 11
    console.log(rest)
    console.log(rest < 2)
    digit2 = rest >= 2 ? 11 - rest : 0

    return numbers[10] == digit2   
}