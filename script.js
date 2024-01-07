//declare global variables

let employees = [];
const currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
});//need to use this with .format to convert number to currency. Stored in variable since using in two places

let employeeCount = 0;//track number of employees added to table

function addEmployee(e) {
    e.preventDefault();

    if (employeeCount === 7) {
        alert("Too many employees! Looks like it's time for some layoffs :(")
        return;
    }

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const id = document.getElementById("id");
    const title = document.getElementById("title");
    const salary = document.getElementById("salary");

    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        id: id.value,
        title: title.value,
        salary: salary.value,
    }

    //below code checks if any fields were left empty, alerts user to complete fields
    if (Object.values(employee).includes("")) {
        alert("Must complete all fields!");
        return;
    }

    //add employee to array then loop through it to update DOM
    employees.push(employee);

    console.log(employees);

    employeeCount++;

    updateTable();

    updateMonthlyCosts();

    //clear form fields and update total employees
    firstName.value = "";
    lastName.value = "";
    id.value = "";
    title.value = "";
    salary.value = "";
}

// --(Stretch mode: adjust total monthly cost on delete)
// update README.md!!!

function updateTable() {
    const tableContent = document.getElementById("main-content");

    tableContent.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        const person = employees[i]
        tableContent.innerHTML += `
        <tr id="${i + 1}">
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.id}</td>
            <td>${person.title}</td>
            <td>${currencyFormat.format(person.salary)}</td>
            <td class="delete-container"><button onClick="removeEmployee(event)">Delete</button></td>
        </tr>
        `;
    }
}

function updateMonthlyCosts() {
    const totalCostDisplay = document.getElementById("total-cost-display");
    let totalCost = 0;
    for (let person of employees) {
        totalCost += person.salary / 12;//person.salary is a string, but the division converts it to a number
    }
    if (totalCost > 20000) {
        totalCostDisplay.style.backgroundColor = "red";
    }
    totalCostDisplay.textContent = currencyFormat.format(totalCost);
}

//onDelete, remove entire row from table
function removeEmployee(e) {
    const employeeNumber = e.target.closest("tr").id;
    employees.splice(parseInt(employeeNumber)-1, 1);
    console.log(`This is the updated array after removing employees: ${JSON.stringify(employees)}`);
    e.target.closest("tr").remove();
}