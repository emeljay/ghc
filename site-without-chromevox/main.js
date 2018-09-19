window.onload = () => {
	const buyDialog = document.getElementById("buyDialog");
	const mainPage = document.getElementById("mainPage");

	function buyButtonClicked() {
		showDialog();
	}

	function submitButtonClicked() {
		alert("You submitted the form. Yay.");
		hideDialog();
	}

	function closeDialogButtonClicked() {
		hideDialog();
	}

	function hideDialog() {
		buyDialog.classList.add("isHidden");
	}

	function showDialog() {
		buyDialog.classList.remove("isHidden");
	}

	// Sets up event listeners
	document.getElementById("orderFormItemsContainer").addEventListener("click", (e) => {
		if (e.target.classList.contains("buyButton")) {
			buyButtonClicked();
		}
	});
	document.getElementById("submitButton").addEventListener("click", (e) => {
		submitButtonClicked();
	});
	document.getElementById("dialogCloseButton").addEventListener("click", (e) => {
		closeDialogButtonClicked();
	});
}