// Collect input for:
// employee firstName
// employee lastName
// employee ID number
// employee job title
// employee annual salary

// Store the above information in an array of employee objects, then:
// Append each employee's information in the table, add delete button, and clear input fields onSubmit
// Create function that updates the monthly costs (total cost variable) with each employee added (remember, MONTHLY cost)
// --IF total monthly costs > 20k, add red background to total monthly cost
// --(Stretch mode: adjust total monthly cost on delete)
// update README.md!!!

let employees = [];

function addEmployee(e) {
    e.preventDefault();

    const tbody = document.querySelector("tbody");

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
    employees.push(employee);

    for (let person of employees) {
        tbody.innerHTML = `
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
            <td class="delete-container"><button>Delete</button></td>
        </tr>
        `;
    }
    console.log(employees);
    firstName.value = "";
    lastName.value = "";
    id.value = "";
    title.value = "";
    salary.value = "";
} 
