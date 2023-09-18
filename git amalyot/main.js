const number = document.querySelector(".number");
const step = document.querySelector(".step");
const time = document.querySelector(".time");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

btn1.addEventListener("click", () => {
	if (step.value !== "" && time.value == "") {
		console.log(step.value);
		number.innerText = +step.value + +number.innerText;
	} else {
		setInterval(() => {
			number.innerText = +step.value + +number.innerText;
		}, time.value * 1000);
	}
});

btn2.addEventListener("click", () => {
	if (step.value !== "" && time.value == "") {
		console.log(step.value);
		number.innerText = +number.innerText - +step.value;
	} else {
		setInterval(() => {
			number.innerText = +number.innerText - +step.value ;
		}, time.value * 1000);
	}
});