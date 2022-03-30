import { img, title, value, buttons } from "../selections.js"

export default (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[0].classList.add("active");
    buttons.forEach(btn => {
        const label = btn.dataset.label;
        // console.log(label)
        btn.addEventListener("click", () => {
            title.textContent = `My ${label} is`
            value.textContent = person[label];
            buttons.forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");
        })
    })
} 