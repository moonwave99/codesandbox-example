(async () => {
    const response = await fetch("/api/data");
    const data = await response.json();

    const $el = document.querySelector(".data");

    data.forEach((x) => ($el.innerHTML += `<li>${x.name}</li>`));

    $el.classList.toggle("visible");
})();
