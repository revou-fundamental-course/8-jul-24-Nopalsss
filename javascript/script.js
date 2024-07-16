
function calculateBMI() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
        document.getElementById("result").textContent = "Harap masukkan berat dan tinggi yang valid.";
        return;
    }

    const bmi = berat / (tinggi * tinggi);
    const category = getBMICategory(bmi);

    document.getElementById("result").textContent = `BMI Anda: ${bmi.toFixed(2)} (${category})`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Kelebihan berat badan";
    } else {
        return "Obesitas";
    }
}
