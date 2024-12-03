// Scroll olayını dinle
window.addEventListener("scroll", function () {
    const ustBilgilerDiv = document.querySelector(".üst_bilgiler");
    const scrollY = window.scrollY; // Sayfanın kaydırıldığı piksel miktarı
    
    // Eğer sayfa belli bir miktar kaydırılmışsa arka plan rengini ekle
    if (scrollY > 50) { // 50 piksel kaydırıldıktan sonra
        ustBilgilerDiv.classList.add("scrolled");
    } else {
        ustBilgilerDiv.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.blgler');
    links.forEach(link => {
        link.style.textDecoration = 'none'; // Alt çizgi yok
    });
});
