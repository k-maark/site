document.addEventListener("DOMContentLoaded", () => { // megvarja amig a HTML teljesen betolt mielott a kod lefut.
    const menuBtn = document.getElementById("menuBtn"); // megkeresi a szukseges elemeket a HTML file ban ID alapjan amihez csatoval van (MenuBtn, mobileMenu)
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return; // ha az elemek nem leteznek akkor nem tortenik semmmi.

    menuBtn.addEventListener("click", () => { // figyeli h a menuBtn re ra kattintanak e, ha igen akkor a mobileMenu akkor a megjelenik vagy eltunik. Attol fugg hogy a translate-x-full osztaly letezik e vagy sem.
    mobileMenu.classList.toggle("translate-x-full");
});

document.querySelectorAll("#mobileMenu a").forEach(link => { // ha linkre kattintunk akkor a menu bezarodik
    link.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        });
    });
});