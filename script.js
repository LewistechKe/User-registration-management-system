// User data array to store user records
let userData = [];

// Function to add a new user record
function createUser(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  const name = document.getElementById('nameInput').value;
  const id = document.getElementById('idInput').value;
  const country = document.getElementById('countrySelect').value;
  const languages = document.getElementById('languagesInput').value;

  // Create user object
  const user = {
    name: name,
    id: id,
    country: country,
    languages: languages
  };

  // Add user object to the data array
  userData.push(user);

  // Clear form inputs
  document.getElementById('nameInput').value = '';
  document.getElementById('idInput').value = '';
  document.getElementById('countrySelect').value = '';
  document.getElementById('languagesInput').value = '';

  // Refresh the user records table
  displayUserRecords();
}

// Function to display user records in the table
function displayUserRecords() {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = ''; // Clear existing table data

  // Loop through each user record and create table rows
  userData.forEach(function(user) {
    // Create table row for each user
    const row = document.createElement('tr');

    // Create table data cells
    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;

    const idCell = document.createElement('td');
    idCell.textContent = user.id;

    const countryCell = document.createElement('td');
    countryCell.textContent = user.country;

    const languagesCell = document.createElement('td');
    languagesCell.textContent = user.languages;

    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteUser(user);
    });
    actionsCell.appendChild(deleteButton);
    
    

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(idCell);
    row.appendChild(countryCell);
    row.appendChild(languagesCell);
    row.appendChild(actionsCell);

    // Append row to the table body
    userTableBody.appendChild(row);
  });
}

// Function to delete a user record
function deleteUser(user) {
  const index = userData.indexOf(user);
  if (index > -1) {
    userData.splice(index, 1);
    displayUserRecords();
  }
}


// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', createUser);

// Display initial user records
displayUserRecords();
 
