class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get totalValue() {
        return this.price * this.quantity;
    }
}

let products = [];

function addProduct() {
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const quantity = parseInt(document.getElementById('productQuantity').value);

    // Xác thực đầu vào
    if (!id || !name || isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
        alert('Please enter valid product details.');
        return;
    }

    // Kiểm tra ID trùng lặp
    if (products.some(product => product.id === id)) {
        alert(`ID ${id} already exists. Please choose a different ID.`);
        return;
    }

    const newProduct = new Product(id, name, price, quantity);
    products.push(newProduct);

    renderProducts();
    updateSummary();

    // Xóa các trường nhập liệu
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
}

function renderProducts() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = ''; // Xóa bảng hiện tại

    products.forEach(product => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price.toLocaleString('vi-VN')} VNĐ</td>
            <td>${product.quantity}</td>
            <td>${product.totalValue.toLocaleString('vi-VN')} VNĐ</td>
            <td class="actions">
                <button class="edit">Sửa</button>
                <button class="delete">Xóa</button>
            </td>
        `;
        // TODO: Thêm trình lắng nghe sự kiện cho các nút chỉnh sửa và xóa
    });
}

function updateSummary() {
    const totalInventoryValue = products.reduce((sum, product) => sum + product.totalValue, 0);
    document.getElementById('totalInventoryValue').textContent = `${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`;

    const mostExpensiveProduct = products.reduce((max, product) => (max.price > product.price ? max : product), null);
    if (mostExpensiveProduct) {
        document.getElementById('mostExpensiveProduct').textContent = `${mostExpensiveProduct.name} (${mostExpensiveProduct.price.toLocaleString('vi-VN')} VNĐ)`;
    } else {
        document.getElementById('mostExpensiveProduct').textContent = 'N/A';
    }
}

// Thêm trình lắng nghe sự kiện vào nút thêm
document.getElementById('addProductBtn').addEventListener('click', addProduct);

// Bản kết xuất ban đầu (trong trường hợp dữ liệu đã điền sẵn hoặc để rõ ràng hơn)
renderProducts();
updateSummary();