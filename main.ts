// Question6:Write a program that calculte the Body Mass Index(BMI) and categorized it

function calculateBMI(weight: number, height: number): number {
    // BMI formula: weight (kg) / height (m) squared
    const bmi: number = weight / (height * height);
    return bmi;
}

const mybmi: number = calculateBMI(40,1.6002);
let category:string;
    if (mybmi< 18.5) {
        category ="Underweight";
    } else if (mybmi >= 18.5 && mybmi < 24.9) {
        category ="Normal weight";
    } else if (mybmi >= 24.9 && mybmi < 29.9) {
        category ="Overweight";
    } else {
        category = "Obese";
    }

    console.log(`Your BMI is ${mybmi.toFixed(2)}, which falls under the category of ${category}.`);
    const bmi: number = calculateBMI(50,5);