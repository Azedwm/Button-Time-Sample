const checkbox = document.querySelector(".check-mode");

checkbox.addEventListener("change", (e) => {
  e.target.checked
    ? (document.body.style.cssText = `background: #01131F`)
    : (document.body.style.cssText = `background: #FFF5D9`);
});
