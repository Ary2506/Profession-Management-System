let employees = [];
let idCounter = 1;

const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");

const addBtn = document.getElementById("addBtn");
const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");
const emptyMsg = document.getElementById("emptyMsg");

addBtn.addEventListener("click", addEmployee);

function addEmployee() {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !profession || !age) {
    message.textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    message.className = "error";
    return;
  }

  const employee = {
    id: idCounter++,
    name: name,
    profession: profession,
    age: age
  };

  employees.push(employee);

  message.textContent = "Success : Message Added";
  message.className = "success";

  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";

  renderEmployees();
}

function renderEmployees() {
  employeeList.innerHTML = "";

  if (employees.length === 0) {
    emptyMsg.style.display = "block";
    emptyMsg.innerText = "Data not found";
    return;
  }

  emptyMsg.style.display = "none";

  employees.forEach((employee, index) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");

    employeeDiv.innerHTML = `
      <div class="employee-info">
        <span>${index + 1}.</span>
        <span>${employee.name}</span>
        <span>${employee.profession}</span>
        <span>${employee.age}</span>
      </div>

      <button class="delete-btn" onclick="deleteEmployee(${employee.id})">
        Delete
      </button>
    `;

    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
}

// Initial state
renderEmployees();