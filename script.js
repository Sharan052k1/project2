// Function to load students from local storage and display them
function loadStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const tableBody = document.getElementById("studentList");
  tableBody.innerHTML = ""; // Clear the table

  students.forEach((student, index) => {
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.emailaddress}</td>
        <td>${student.studentClass}</td>
        <td>${student.telephoneNo}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

// Function to add new student data
function AddData() {
  const name = document.getElementById("name").value;
  const emailaddress = document.getElementById("emailaddress").value;
  const studentClass = document.getElementById("studentclass").value;
  const telephoneNo = document.getElementById("telephoneno").value;

  if (name && emailaddress && studentClass && telephoneNo) {
    const student = { name, emailaddress, studentClass, telephoneNo };

    // Get students from local storage, add the new student, and save it back
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    // Reload the student list and clear input fields
    loadStudents();
    document.getElementById("studentForm").reset();
  }
}

// Function to delete student
function deleteStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1); // Remove student at the specified index
  localStorage.setItem("students", JSON.stringify(students)); // Update local storage
  loadStudents(); // Reload the updated list
}

// Function to edit student
function editStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students[index];

  // Populate form fields with student data
  document.getElementById("name").value = student.name;
  document.getElementById("emailaddress").value = student.emailaddress;
  document.getElementById("studentclass").value = student.studentClass;
  document.getElementById("telephoneno").value = student.telephoneNo;

  // Show update button and hide add button
  document.getElementById("Submit").style.display = "none";
  document.getElementById("update").style.display = "inline";

  // Set onclick for update button to update student
  document.getElementById("update").onclick = function () {
    student.name = document.getElementById("name").value;
    student.emailaddress = document.getElementById("emailaddress").value;
    student.studentClass = document.getElementById("studentclass").value;
    student.telephoneNo = document.getElementById("telephoneno").value;

    // Update the students array and local storage
    students[index] = student;
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();

    // Reset form and buttons
    document.getElementById("studentForm").reset();
    document.getElementById("Submit").style.display = "inline";
    document.getElementById("update").style.display = "none";
  };
}

// Load students from local storage when the page loads
window.onload = loadStudents;
