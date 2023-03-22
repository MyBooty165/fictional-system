const passcodeForm = document.getElementById("passcode-form");

passcodeForm.addEventListener("submit", function(event) {
	event.preventDefault();
	const passcodeInput = document.getElementById("passcode-input").value;
	if (passcodeInput === "822057") {
		window.location.replace("https://sites.google.com/stu.cfisd.net/rhsssvq24k0-iopwfrjw445wskvrr/home");
	} else {
		alert("Incorrect passcode. Please try again.");
	}
});
