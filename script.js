class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real += num.real;
        this.imaginary += num.imaginary;
    }

    get real() {
        return this._real;
    }

    get imaginary() {
        return this._imaginary;
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }

    set real(newReal) {
        this._real = newReal;
    }
}

function addComplexNumbers() {
    const realA = parseFloat(document.getElementById('realA').value);
    const imaginaryA = parseFloat(document.getElementById('imaginaryA').value);
    const realB = parseFloat(document.getElementById('realB').value);
    const imaginaryB = parseFloat(document.getElementById('imaginaryB').value);

    let a = new Complex(realA, imaginaryA);
    let b = new Complex(realB, imaginaryB);

    a.add(b);

    document.getElementById('result').innerText = `Result: ${a.real} + ${a.imaginary}i`;
}