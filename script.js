// Collect input for:
// employee firstName
// employee lastName
// employee ID number
// employee job title
// employee annual salary

// Store the above information in an array of employee objects, then:
// Append each employee's information in the table, add delete button, and clear input fields onSubmit

let employees = [];
const currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
});//need to use this with .format to convert number to currency. Stored in variable since using in two places

function addEmployee(e) {
    e.preventDefault();

    const tableContent = document.getElementById("main-content");
    tableContent.innerHTML = "";

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

    employees.push(employee);


    for (let person of employees) {
        tableContent.innerHTML += `
        <tr>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.id}</td>
            <td>${person.title}</td>
            <td>${currencyFormat.format(person.salary)}</td>
            <td class="delete-container"><button onClick="removeEmployee(event)">Delete</button></td>
        </tr>
        `;
    }
    console.log(employees);

    updateMonthlyCosts();

    firstName.value = "";
    lastName.value = "";
    id.value = "";
    title.value = "";
    salary.value = "";
}

// Create function that updates the monthly costs (total cost variable) with each employee added (remember, MONTHLY cost)
// --IF total monthly costs > 20k, add red background to total monthly cost
// --(Stretch mode: adjust total monthly cost on delete)
// update README.md!!!

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

const removeEmployee = (e) => e.target.closest("tr").remove();