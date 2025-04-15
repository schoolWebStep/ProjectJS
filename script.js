let full_total=0;
function calculate() {
    let food = document.getElementById("food").value.split(",")
    let foodName = food[5];
    let weight = parseFloat(document.getElementById("weight").value)
    if ( weight <= 0) {
        document.getElementById("result").innerHTML = "Будь ласка, введіть коректну вагу.";
        document.getElementById("weight").value=""

        return
    }
    let kcal = (food[0] * weight) / 100
    let protein = (food[1] * weight) / 100
    let fat = (food[2] * weight) / 100
    let carbs = (food[3] * weight) / 100
    document.getElementById("result").innerHTML = `Калорії: ${kcal.toFixed(2)} ккал<br>Білки: ${protein.toFixed(2)} г<br>Жири: ${fat.toFixed(2)} г<br>Вуглеводи: ${carbs.toFixed(2)} г`;
    let list = document.getElementById("consumedList");
    let item = document.createElement("li");
    item.textContent = `${foodName} – ${weight}г (К: ${kcal.toFixed(1)} ккал, Б: ${protein.toFixed(1)}г, Ж: ${fat.toFixed(1)}г, В: ${carbs.toFixed(1)}г)`;
    list.appendChild(item);
    
    full_total=full_total+kcal;
    document.getElementById("total_ccal").innerHTML=full_total.toFixed(1)+"Ккал"
    document.getElementById("weight").value=""
}
function updateImage() {
    let food = document.getElementById("food").value.split(",");
    document.getElementById("foodImage").src = food[4];
}
