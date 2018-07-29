window.onload = () => {
	const buyDialog = document.getElementById("buyDialog");

	function buyButtonClicked() {
		buyDialog.classList.remove("isHidden");
	}

	function submitButtonClicked() {
		buyDialog.classList.add("isHidden");
	}

	// Sets up event listeners
	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("buyButton")) {
			buyButtonClicked();
		} else if (e.target.classList.contains("submitButton")) {
			submitButtonClicked();
		}
	});
}