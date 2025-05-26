const images = [
    "https://a-static.besthdwallpaper.com/snow-covered-mountains-wallpaper-3200x2400-78537_29.jpg",
    "https://th.bing.com/th/id/OIP.He4Bd6FmT_RXmz50l59P-wHaEK?w=330&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.1gV108XvjL5iHSgpWQsdywHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.05b595cfd061506a12733aeb064d7748?rik=Lmao0wvIKAvoBA&pid=ImgRaw&r=0",
    "https://img.pikbest.com/ai/illus_our/20230418/64e0e89c52dec903ce07bb1821b4bcc8.jpg!bw700",
    "https://th.bing.com/th/id/OIP.SVL1JuQuVKkqxlpLhFFYMwHaEU?rs=1&pid=ImgDetMain"
];
let currentIndex = 0;

function showImage(index){
    const imgElement = document.getElementById("slide");
    imgElement.src = images[index];
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage(){
    currentIndex = (currentIndex + 1 ) % images.length;
    showImage(currentIndex);
}