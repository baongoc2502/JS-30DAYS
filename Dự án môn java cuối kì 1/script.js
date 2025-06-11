// 1. Hiệu ứng header khi scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 3. Xử lý click chữ cái A-Z (lọc phim theo tên bắt đầu bằng chữ đó)
document.querySelectorAll(".alphabet-nav span").forEach(letter => {
  letter.addEventListener("click", () => {
    alert(`Bạn vừa chọn chữ cái: ${letter.textContent}`);
    // TODO: Thực hiện lọc phim theo chữ cái đầu
  });
});

// 4. Xử lý click năm phát hành
document.querySelectorAll(".year-grid span").forEach(year => {
  year.addEventListener("click", () => {
    alert(`Bạn đã chọn năm: ${year.textContent}`);
    // TODO: Lọc danh sách phim theo năm được chọn
  });
});




// 5. Thanh tìm kiếm với gợi ý
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const suggestionsBox = document.getElementById('suggestions');

// Danh sách phim mẫu để tìm kiếm
const movieList = [
    "Mật Vụ Ong",
    "Tàng Hải Truyền – Legend Of Zang Hai",
    "Khi Cuộc Đời Cho Bạn Quả Quýt",
    "Nhà Gia Tiên",
    "Linh Miêu: Quỷ Nhập Tràng",
    "Thợ Sửa Ống Nước – Tubero",
    "Bộ Tứ Báo Thù",
    "Mai (2024 – Trấn Thành)",
    "Chị Mười Ba: 3 ngày sinh tử (2023)",
    "Spider-Man: Across the Spider-Verse (2023)",
    
];

// Xử lý khi người dùng nhập
searchInput.addEventListener('input', function () {
    const keyword = this.value.toLowerCase().trim();
    suggestionsBox.innerHTML = ''; // Xóa kết quả cũ

    if (keyword.length === 0) return;

    const filteredMovies = movieList.filter(title => 
        title.toLowerCase().includes(keyword)
    );

    filteredMovies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        li.classList.add('suggestion-item');
        li.onclick = () => {
            searchInput.value = movie;
            suggestionsBox.innerHTML = '';
            // Có thể điều hướng đến trang phim tại đây
            console.log("Chọn phim:", movie);
        };
        suggestionsBox.appendChild(li);
    });
});

// Xử lý khi click nút tìm kiếm
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        console.log(`Tìm kiếm: ${query}`);
        // TODO: Tìm phim trong danh sách theo từ khóa
    }
});

// Enter để tìm kiếm
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchButton.click();
    }
});

let currentSlide = 0;
const dots = document.querySelectorAll(".dot");
const movies = document.querySelector(".movies");

// Hàm đổi slide
function changeSlide(index) {
  currentSlide = index;
  const offset = index * movies.clientWidth;
  movies.scrollTo({
    left: offset,
    behavior: "smooth"
  });

  // Cập nhật chấm tròn
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Gán sự kiện click vào từng chấm
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => changeSlide(index));
});

// Tự động chuyển sau 5s
setInterval(() => {
  let nextSlide = (currentSlide + 1) % dots.length;
  changeSlide(nextSlide);
}, 5000);

//phần đăng nhập tài khoản
function showLogin() {
      document.getElementById('overlay').style.display = 'flex';
    }

    function closeLogin(event) {
      if (event.target.id === 'overlay' || event.target.className === 'close-btn') {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('loginMessage').textContent = ''; // Xóa thông báo khi đóng form
      }
    }

// Xử lý đăng nhập
const loginForm = document.getElementById('loginForm');
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');
const loginMessageDiv = document.getElementById('loginMessage');
const loginBtn = document.getElementById('loginBtn');
const loggedInUserDisplay = document.getElementById('loggedInUserDisplay');
const logoutBtn = document.getElementById('logoutBtn');

// Hàm cập nhật trạng thái UI sau khi đăng nhập/tải lại trang
function updateLoginUI(username) {
    if (username) {
        loginBtn.style.display = 'none';
        loggedInUserDisplay.textContent = `Xin chào, ${username}!`;
        loggedInUserDisplay.style.display = 'inline-block';
        logoutBtn.style.display = 'inline-block';
    } else {
        loginBtn.style.display = 'block';
        loggedInUserDisplay.style.display = 'none';
        loggedInUserDisplay.textContent = '';
        logoutBtn.style.display = 'none';
    }
}

// Kiểm tra trạng thái đăng nhập khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (localStorage.getItem('isLoggedIn') === 'true' && username) {
        updateLoginUI(username);
    } else {
        updateLoginUI(null); // Đảm bảo nút đăng nhập hiển thị nếu chưa đăng nhập
    }
});

// Xử lý đăng xuất khi nhấp vào nút Đăng Xuất
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    updateLoginUI(null);
    alert('Bạn đã đăng xuất!');
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi mặc định

    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    if (email.endsWith('@gmail.com') && password.length > 0) {
        loginMessageDiv.style.color = 'green';
        loginMessageDiv.textContent = 'Đăng nhập thành công!';
        
        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', email.split('@')[0]); // Lưu phần tên của email

        // Sau một thời gian, đóng form và cập nhật UI
        setTimeout(() => {
            closeLogin({ target: { id: 'overlay' } }); // Đóng overlay
            updateLoginUI(localStorage.getItem('username'));
            alert('Chào mừng bạn đến với trang web!');
        }, 1500);
    } else {
        loginMessageDiv.style.color = 'red';
        loginMessageDiv.textContent = 'Email phải có định dạng @gmail.com và mật khẩu không được để trống.';
    }
});

const row = document.getElementById('movieRow');
let scrollX = 0;
//nút chuyển tiếp của phim 
function scrollCarousel(sectionId, direction) {
  const container = document.getElementById(sectionId);
  if (!container) return; // Thêm kiểm tra nếu container không tồn tại

  let itemWidth = 0;
  const gap = 20; // Khoảng cách giữa các item, lấy từ CSS

  // Xác định chiều rộng của item dựa trên loại carousel
  if (sectionId === 'hotMovies' || sectionId === 'singleMovies' || sectionId === 'seriesMovies') {
    // Đây là các film-list, item là .film-item
    const filmItem = container.querySelector('.film-item');
    if (filmItem) {
      itemWidth = filmItem.offsetWidth;
    }
  } else {
    // Đây là slider chính, item là .movie-card
    const movieCard = container.querySelector('.movie-card');
    if (movieCard) {
      itemWidth = movieCard.offsetWidth;
    }
  }

  if (itemWidth === 0) return; // Thoát nếu không tìm thấy item hoặc chiều rộng bằng 0

  const scrollAmount = (itemWidth + gap) * 0.7; // chỉ cuộn 70% chiều rộng 1 phim
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Quay lại chức năng trang đầu
const backToTopButton = document.querySelector('.footer-backtop a');

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Chức năng cuộn lên đầu trang
const nutLenDauTrang = document.querySelector('.footer-backtop a');

nutLenDauTrang.addEventListener('click', (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
  window.scrollTo({
    top: 0, // Vị trí cuộn đến đầu trang
    behavior: 'smooth' // Hiệu ứng cuộn mượt mà
  });
});