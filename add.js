//This codes are used for Electricity Billing System


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

//This codes are used for Banking System



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

//This codes are used for Driving License Eligibility System

  function checkEligibility() {
            let name = document.getElementById("name").value;
            let age = parseInt(document.getElementById("age").value);
            let output = "";

            if (isNaN(age) || age < 0) {
                output = "Invalid age input";
            } 
            else if (age < 18) {
                output = "Applicant Name: " + name + "<br>" +
                         "Age: " + age + "<br>" +
                         "Eligibility: Not Eligible<br>" +
                         "Decision: Rejected";
            } 
            else if (age <= 60) {
                output = "Applicant Name: " + name + "<br>" +
                         "Age: " + age + "<br>" +
                         "Eligibility: Eligible<br>" +
                         "Decision: Proceed to Driving Test";
            } 
            else {
                output = "Applicant Name: " + name + "<br>" +
                         "Age: " + age + "<br>" +
                         "Eligibility: Eligible with Medical Examination<br>" +
                         "Decision: Proceed after Medical Examination";
            }

            document.getElementById("result").innerHTML = output;
        }

//This codes are used for Student Marks Grading System

        function calculateGrade() {
            let name = document.getElementById("studentName").value;
            let marks = parseFloat(document.getElementById("marks").value);
            let grade = "";
            let result = "";

            if (isNaN(marks) || marks < 0 || marks > 100) {
                document.getElementById("report").innerHTML = "Invalid marks input";
                return;
            }

            if (marks >= 80) {
                grade = "A";
            } else if (marks >= 70) {
                grade = "B";
            } else if (marks >= 60) {
                grade = "C";
            } else if (marks >= 50) {
                grade = "D";
            } else {
                grade = "F";
            }

            if (marks >= 50) {
                result = "Pass";
            } else {
                result = "Fail";
            }

            document.getElementById("report").innerHTML =
                "Student Name: " + name + "<br>" +
                "Marks: " + marks + "<br>" +
                "Grade: " + grade + "<br>" +
                "Result: " + result;
        }