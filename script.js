document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "nextpage/success.html"; // Redirect to the new page (to be created)
    } else {
        document.getElementById("message").innerText = "Invalid username or password!";
        document.getElementById("message").style.color = "red";
    }
});
