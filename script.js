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
    const employee = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        salary: document.getElementById("salary").value,
    }
    employees.push(employee);

    for (let person of employees) {
        tbody.innerHTML += `
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
        </tr>
        `;//format the employee info into the table here
    }
    console.log(employees);
} 
