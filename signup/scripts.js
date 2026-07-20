import { MLPlatform } from "./api/signupevent.js"

var submitbutton = document.getElementById("submitbutton")
var username = document.getElementById("username") //When referencing, use `username.value` not `username`
var password = document.getElementById("password") //When referencing, use `password.value` not `password`
var errormessageelem = document.getElementById("errormessage")

submitbutton.addEventListener("click", () => {
    if (username.value && password.value) {
        MLPlatform.generate_user_id()
        MLPlatform.create_account(username.value, password.value)
        errormessageelem.innerHTML = "Success!"
        errormessageelem.style.color = "green"
        setTimeout(() => {
            window.sessionStorage.setItem("loggedIn", true)
            window.sessionStorage.setItem("username", username.value)
            window.location.href = "../"
        }, 500)
    } else {
        MLPlatform.useraccounterr("missingfield", errormessageelem)
        errormessageelem.style.color = "red"
    }
})