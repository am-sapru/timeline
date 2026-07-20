var submitbutton = document.getElementById("submitbutton")
var username = document.getElementById("username")
var password = document.getElementById("password")

submitbutton.addEventListener("click", () => {
    if (username && password) {
        console.log(`Username: ${username.value}, password: ${password.value}`)
        window.sessionStorage.setItem("loggedIn", true);
        window.sessionStorage.setItem("username", username.value)
        window.location.href = "/"
    } else {
        console.log("A required field is missing!")
    }
})