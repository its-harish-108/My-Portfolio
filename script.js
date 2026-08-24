const home = document.querySelector(".Home");
const qualification = document.querySelector(".Qualification");
const project = document.querySelector(".Projects");
const contact = document.querySelector(".Contact");

const homeSection = document.querySelector("#home-section");
const qualificationSection = document.querySelector("#qualification-section");
const projectSection = document.querySelector("#project-section");
const contactSection = document.querySelector("#contact-section");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("click", (event) => {
		event.stopPropagation();
		const isSelected = box.classList.contains("is-selected");

		boxes.forEach((item) => item.classList.remove("is-selected"));
		document.body.classList.toggle("box-focused", !isSelected);

		if (!isSelected) {
			box.classList.add("is-selected");
		}
	});
});

document.addEventListener("click", () => {
	boxes.forEach((box) => box.classList.remove("is-selected"));
	document.body.classList.remove("box-focused");
});

home.addEventListener("click", () => {
	homeSection.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});

qualification.addEventListener("click", () => {
	qualificationSection.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});

project.addEventListener("click", () => {
	projectSection.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});

contact.addEventListener("click", () => {
	contactSection.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});
