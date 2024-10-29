const backToTop = document.getElementById("back-to-top");

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

