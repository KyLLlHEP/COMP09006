function BMICalculator(weight, height,age, gender) {
    let heightInMeters = height / 100;
    let genderInput = document.getElementById("gender").value;
    if (genderInput == "male") {
        let bmrM = 88.362+(13.397 * weight) + (4.799 *height) - (5.677* age);
        return bmrM.toFixed(2);
    } else if (genderInput == "female") {
        let bmrF = 447.593+(9.247* weight) + (3.098 * height) - (4.330* age);
        return bmrF.toFixed(2);
    } else {
        console.log('select gender');
    }





}

let button = document.getElementById("calculate-btn");
button.addEventListener("click", function () {

    let ageInput =  parseFloat(document.getElementById("age").value);
    let weightInput = parseFloat(document.getElementById("weight").value);
    let heightInput = parseFloat(document.getElementById("height").value);
    let genderInput = document.getElementById("gender").value;

    let bmiResult = BMICalculator(weightInput, heightInput, ageInput, genderInput);

    document.getElementById("bmi-result").textContent = `Your BMI is: ${bmiResult}`;
});


// For males:
//     BMR=88.362+(13.397×weight)+(4.799×height)−(5.677×age)
// For females:
//     BMR=447.593+(9.247×weight)+(3.098×height)−(4.330×age)
