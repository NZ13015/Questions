function checkBilings(){
    
let name = document.getElementById("name").value;
let units = parseInt(document.getElementById("units").value);
let rate;
let totalBill;
let message;

if (units < 0 || isNaN(units)) {
    document.write("Invalid input! Units cannot be negative.");
}
else {
    if (units >= 0 && units <= 100) {
        rate = 100;
    }else if (units >= 101 && units <= 200) {
        rate = 150;
    }else if (units >= 201 && units <= 299) {
        rate = 200;
    }else if (unit >=300){
        rate = 250;
    }
    else{
        document.write("invalid unit")
    }
    totalBill = units * rate;
    message = "<h3>Electricity Bill</h3>"+
    "Customer Name: " + name+
    "<br>Units Consumed: " + units+
    "<br>Rate per Unit: " + rate + " RWF"+
    "<br>Total Bill: " + totalBill + " RWF";

    document.getElementById("result").innerHTML = message;

}
}


let balance = 50000;

function updateDiplay(){
    document.getElementById("balanceDiplay").innerText ="Balance :" + balance +"RWF";
}

function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    
    if (amount > 0) {
        balance += amount;
        document.getElementById("message").innerText =
            "Deposit successful! Balance: " + balance + " RWF";
    } else {
        document.getElementById("message").innerText =
            "Invalid deposit amount.";
    }
}

function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value);

    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            document.getElementById("message").innerText =
                "Withdrawal successful! Balance: " + balance + " RWF";
        } else {
            document.getElementById("message").innerText =
                "Insufficient funds.";
        }
    } else {
        document.getElementById("message").innerText =
            "Invalid withdrawal amount.";
    }
}

function checkBalance() {
    document.getElementById("message").innerText =
        "Current balance: " + balance + " RWF";
}