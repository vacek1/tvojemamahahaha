function myscript() {
    const number = document.getElementById("number").value;
    let output = "";

    for (let i = 0; i < number.length; i++) {
      output += number.slice(0, number.length - i) + "\n";
    }

    document.getElementById("output").textContent = output;
  }