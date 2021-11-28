const cpf = require("./cpf");

test("Deve validar um CPF com sucesso", function () {
    const number = "13898463699"
    expect(cpf.validate(number)).toBeTruthy();
});

test("Deve validar um CPF com máscara com sucesso", function () {
    const number = "138.984.636-99"
    expect(cpf.validate(number)).toBeTruthy();
});

test("Deve validar um CPF com número nulo", function () {
    const number = null
    expect(cpf.validate(number)).not.toBeTruthy();
});

test("Deve validar um CPF com número undefined", function () {
    const number = undefined
    expect(cpf.validate(number)).not.toBeTruthy();
});

test("Deve validar um CPF com número invalido por ser menor que o desejado", function () {
    const number = "13898"
    expect(cpf.validate(number)).not.toBeTruthy();
});

test("Deve validar um CPF com número invalido por ser maior que o desejado", function () {
    const number = "1389846369901020304"
    expect(cpf.validate(number)).not.toBeTruthy();
});

test("Deve validar um CPF com número invalido pelo cálculo do dígito 1", function () {
    const number = "13898463599"
    expect(cpf.validate(number)).not.toBeTruthy();
});

test("Deve validar um CPF com número invalido pelo cálculo do dígito 2", function () {
    const number = "13898463698"
    expect(cpf.validate(number)).not.toBeTruthy();
});