let editIndex = -1;

  document.getElementById("addButton").addEventListener("click", function() {
  const maSV = document.getElementById("studentId").value;
  const hoTen = document.getElementById("studentName").value;
  const email = document.getElementById("studentEmail").value;
  const sdt = document.getElementById("studentPhone").value;
  const tbody = document.getElementById("danhSachSV");

    if (editIndex === -1) {
      // Thêm mới
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${maSV}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${sdt}</td>
        <td><button class="fixButton">Sửa</button></td>
      `;
      tbody.appendChild(row);
    } else {
      // Cập nhật
      const row = tbody.rows[editIndex];
      row.cells[0].innerText = maSV;
      row.cells[1].innerText = hoTen;
      row.cells[2].innerText = email;
      row.cells[3].innerText = sdt;

      editIndex = -1;
      document.getElementById("addButton").innerText = "Thêm";
      document.getElementById("form-title").innerText = "Thêm sinh viên vào danh sách";
    }

    // Reset form
    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPhone").value = "";

  });

  document.getElementById("danhSachSV").addEventListener("click", function(e) {
    if (e.target.classList.contains("fixButton")) {
      const row = e.target.closest("tr");
      editIndex = Array.from(row.parentNode.children).indexOf(row);

      document.getElementById("studentId").value = row.cells[0].innerText;
      document.getElementById("studentName").value = row.cells[1].innerText;
      document.getElementById("studentEmail").value = row.cells[2].innerText;
      document.getElementById("studentPhone").value = row.cells[3].innerText;


      document.getElementById("addButton").innerText = "Lưu";
      document.getElementById("form-title").innerText = "Quản lý Sinh viên - DOM";
    }
  });