// submitting sign up form
const signUpForm = document.querySelector(".login-form");

const signUpUser = async (username, email, password) => {
	try {
		const res = await axios({
			method: "POST",
			url: "/api/v1/users/signup",
			data: {
				username,
				email,
				password,
			},
		});
		M.toast({
			html: `You have been registered. You will be redirected soon.`,
			classes: "success-toast",
		});
		setTimeout(() => {
			location.assign("/");
		}, 2000);
	} catch (err) {
		M.toast({ html: `${err.response.data.message}`, classes: "error-toast" });
	}
};

signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const username = document.getElementById("username").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	signUpUser(username, email, password);
});
