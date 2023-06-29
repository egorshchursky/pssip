function calculate() {
    var x = 2;
    var y = 2;
    var result = (2 * x + Math.sqrt(y) + (x - y)) / y + (1 / (Math.pow(x, 2) - 5));
    document.getElementById("result").value = result;
}

function process() {
    const S1 = "Я учащийся группы ПЗТ";
    const S2 = "Я учусь в политехническом колледже";
    
    const lengthS2 = S2.length;
    const containsS1 = S1.includes("ПЗТ");
    const char18 = S2.charAt(10);
    const asciiCode = S2.charCodeAt(10);

    document.getElementById("S1").value = S1;
    document.getElementById("S2").value = S2;
    document.getElementById("length").value = lengthS2;
    document.getElementById("contains1").value = containsS1;
    document.getElementById("char10").value = char18;
    document.getElementById("ascii").value = asciiCode;
  }