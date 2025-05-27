// Đổi tiêu đề trang nếu tìm thấy tiêu đề cụ thể 
const oldTitle = document.title;
// Tiêu đề mới bạn muốn thay thế
const newTitle =  "Sinh Viên UDU top1 server Hoàng Quốc Việt";

document.title = newTitle;
 // Nếu muốn thay luôn cả tiêu đề trong nội dung HTML(h1, h2,..)
 const titleElements = document.querySelectorAll("h1, h2, .title, .article-title");

 titleElements.forEach(el => {
  if (el.innerText.includes("Toàn văn tuyên bố chung Việt Nam - Pháp")) {
    el.innerText = newTitle;
  }
 });