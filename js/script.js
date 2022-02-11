// Global Variables Start

// Global Variables End

// ACTIVE ORDERS AND ORDER HISTORY START
let countDown;
let duration = 30;
let makePayments = document.querySelector(".payments-btn");
makePayments.addEventListener("click", payments);
// cancel order
function cancelOrder(e) {
	let confirmation = confirm("Are you sure you want to cancel?");
	if (confirmation === true) {
		// Hide item when order is cancelled
		let btnParent = e.target.parentElement;
		let itemParent = btnParent.previousElementSibling;
		btnParent.style.display = "none";
		itemParent.style.display = "none";
	}
}
// arrow function
// let increment = (e) =>{
//     let quantity = e.target.previousSibling

// }
let timer = () => {
	duration--;
	if (duration == 0) {
		clearInterval(countDown);
	}
	return (document.querySelector(".timer").innerText = duration);
};
function payments() {
	countDown = setInterval(timer, 500);
	document.querySelector(".payments").classList.replace("hide", "show");
	document.querySelector(".orders").classList.replace("show", "hide");
}

// ACTIVE ORDERS AND ORDER HISTORY END
let quantityValue = 0;
// let cancelOrder = document.querySelectorAll(".cancel").forEach((order) => {
// 	order.addEventListener("click", (e) => {
// 		let confirmation = confirm("Are you sure?");

// 		if (confirmation === true) {
// 			let btnParent = e.target.parentElement;
// 			let itemParent = btnParent.PreviousElementSibling;
// 			console.log(itemParent);
// 			// btnParent.style.display = "none";
// 			// itemParent.style.display = "none";
// 		}
// 	});
// });

// Hide item when order is cancelled
// function cancelOrder(e) {
// 	let confirmation = confirm("Are you sure you want to cancel?");
// 	if (confirmation === true) {
// 		let btnParent = e.target.parentElement;
// 		let itemParent = btnParent.parentElementSibling;
// 		btnParent.style.display = "none";
// 		itemParent.style.display = "none";
// 	}
// }

// Arrow function

let quantity = document.querySelectorAll(".quantity").forEach((q) => {
	q.addEventListener("click", (e) => {
		let change = e.target.innerText;
		if (change === "-") {
			quantityValue = parseInt(e.target.nextSibling.innerText);
			quantityValue--;
			return (e.target.nextSibling.innerText = quantityValue);
		} else if (change === "+") {
			quantityValue = parseInt(e.target.previousSibling.innerText);
			quantityValue++;
			return (e.target.previousSibling.innerText = quantityValue);
		}
	});
});

let quantityChange = (e) => {
	let change = e.target.getAttribute("class");
	// let output = e.targets

	if (change === "increment") {
		quantity = e.target.previousSibling.innerText;
		quantity++;
		return (e.target.previousSibling.innerText = quantity);
	} else {
		quantity = e.target.nextSibling.innerText;
		quantity--;
		return (e.target.nextSibling.innerText = quantity);
	}
};
