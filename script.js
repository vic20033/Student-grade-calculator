let students = [];
let subjects = ["Mathematics", "English", "Computer Science", "Physics", "Chemistry"];
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;

    let message = document.getElementById("message");
message.textContent = "";
    let score1 = Number(document.getElementById("subject1").value);
    let score2 = Number(document.getElementById("subject2").value);
    let score3 = Number(document.getElementById("subject3").value);
    let score4 = Number(document.getElementById("subject4").value);
    let score5 = Number(document.getElementById("subject5").value);

    let scores = [score1, score2, score3, score4, score5];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 0 || scores[i] > 100) {
        message.textContent = "Error: Every score must be between 0 and 100.";
        return;
    }
}
    let total = score1 + score2 + score3 + score4 + score5;
    let average = total / 5;

    let grade;

    if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else if (average >= 45) {
        grade = "D";
    } else if (average >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    let table = document.getElementById("resultTable");

let row = document.createElement("tr");

row.innerHTML = `
    <td>${name}</td>
    <td>${score1}</td>
    <td>${score2}</td>
    <td>${score3}</td>
    <td>${score4}</td>
    <td>${score5}</td>
    <td>${total}</td>
    <td>${average.toFixed(2)}</td>
    <td>${grade}</td>
`;

table.appendChild(row);
students.push({
    name: name,
    scores: [score1, score2, score3, score4, score5],
    total: total
});

let highest = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].total > highest.total) {
        highest = students[i];
    }
}

document.getElementById("highestStudent").textContent =
    "Highest-Scoring Student: " + highest.name +
    " (Total: " + highest.total + "/500)";
    let lowestSubject = "";
let lowestAverage = Infinity;

for (let i = 0; i < subjects.length; i++) {
    let subjectTotal = 0;

    for (let j = 0; j < students.length; j++) {
        subjectTotal += students[j].scores[i];
    }

    let subjectAverage = subjectTotal / students.length;

    if (subjectAverage < lowestAverage) {
        lowestAverage = subjectAverage;
        lowestSubject = subjects[i];
    }
}

document.getElementById("lowestSubject").textContent =
    "Subject with Lowest Class Average: " + lowestSubject +
    " (" + lowestAverage.toFixed(2) + ")";
});