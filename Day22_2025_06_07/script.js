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
      document.getElementById('overlay').style.display = 'none';
    }


    const row = document.getElementById('movieRow');
    let scrollX = 0;
//nút chuyển tiếp của phim 
    function scrollCarousel(sectionId, direction) {
      const container = document.getElementById(sectionId);
      const scrollAmount = 220; // chỉnh cho khớp width phim + gap
      container.scrollLeft += direction * scrollAmount;
    }