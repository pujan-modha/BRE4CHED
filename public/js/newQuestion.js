// submitting login form
const loginForm = document.querySelector(".login-form");

const loginUser = async (levelName, problem, answer, hint, hintText, level) => {
	try {
		const res = await axios({
			method: "POST",
			url: "/api/v1/questions",
			data: {
				levelName,
				problem,
                answer, 
				hint,
				hintText,
                level
			},
		});
		M.toast({
			html: `New Question Accepted.`,
			classes: "success-toast",
		});
        setTimeout(() => {
            location.reload();
        }, 2000);
	} catch (err) {
		M.toast({ html: `${err.response.data.message}`, classes: "error-toast" });
	}
};

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const levelName = document.getElementById("levelName").value;
	const problem = document.getElementById("statement").value;
	const answer = document.getElementById("answer").value;
	const hint = document.getElementById("hint").value;
	const hintText = document.getElementById("hintText").value;
	const level = document.getElementById("level").value;

	loginUser(levelName, problem, answer, hint, hintText, level);
});
