// submitting login form
const loginForm = document.querySelector(".login-form");

const loginUser = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    M.toast({
      html: `Welcome to BRE4CHED. You will be redirected soon.`,
      classes: "success-toast",
    });
    setTimeout(() => {
      location.assign("/play");
    }, 2000);
  } catch (err) {
    M.toast({ html: `${err.response.data.message}`, classes: "error-toast" });
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  loginUser(email, password);
});
