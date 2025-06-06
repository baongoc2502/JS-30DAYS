function scrollCarousel(direction) {
      const container = document.getElementById('movieRow');
      const scrollAmount = 220; // chỉnh cho khớp width phim + gap
      container.scrollLeft += direction * scrollAmount;
    }