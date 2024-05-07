function addVisibleClass(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("bp-visible");
        }
    });
}

window.addEventListener(
    "load",
    () => {
        const images = new Set(document.querySelectorAll("img"));
        const observer = new IntersectionObserver(addVisibleClass, { threshold: 0.15 });
        images.forEach((el) => observer.observe(el));
    },
    false
);
