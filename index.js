function BMICalculator(weight, height) {
    let heightInMeters = height / 100;

    let bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
}

let button = document.getElementById("calculate-btn");
button.addEventListener("click", function () {

    let weightInput = parseFloat(document.getElementById("weight").value);
    let heightInput = parseFloat(document.getElementById("height").value);


    let bmiResult = BMICalculator(weightInput, heightInput);

    document.getElementById("bmi-result").textContent = `Your BMI is: ${bmiResult}`;
});
