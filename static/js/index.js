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
        images.forEach((el) => { el.classList.add("bp-hidden"); });
        const observer = new IntersectionObserver(addVisibleClass, { threshold: 0.1 });
        images.forEach((el) => observer.observe(el));
    },
    false
);
