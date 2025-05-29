document.getElementById('addButton').addEventListener('click', function(){
    const studentId = document.getElementById('studentId').value;
    const sutdentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentPhone = document.getElementById('studentPhone').value;

    const tableBody = document.getElementById('studentTableBody');

    const newrow = document.createElement('tr');

    const idCell = document.createElement('td')
    idCell.textContent = studentId;

    const nameCell = document.createElement('td');
    nameCell.textContent = sutdentName;

    const emailCell = document.createElement('td');
    emailCell.textContent = studentEmail;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = studentPhone;

    newrow.appendChild(idCell);
    newrow.appendChild(nameCell);
    newrow.appendChild(emailCell);
    newrow.appendChild(phoneCell);

    tableBody.appendChild(newrow);

    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    document.getElementById("studentPhone").value = '';
});