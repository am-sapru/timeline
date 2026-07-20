import { MLEvent } from "./api/event.js"

var logo = document.getElementsByClassName("logo")[0]
var loggedin = window.sessionStorage.getItem("loggedIn")
// var loggedin = false;
var username = loggedin ? `<input type="text" name="username" placeholder="Username" value=${window.sessionStorage.getItem("username")}>` : "NOT LOGGED IN"

logo.addEventListener("contextmenu", (e) => {
    e.preventDefault()
})

var accicon = document.getElementsByClassName("account-button")[0]

accicon.addEventListener("contextmenu", (e) => {
    e.preventDefault()
})

var openaccbutton = document.getElementById("openaccdialog")
var accdialog = document.getElementById("accdialog")
var exitaccdialog = document.getElementById("exitaccdialog")

openaccbutton.addEventListener("click", () => {
    accdialog.showModal()
})

exitaccdialog.addEventListener("click", () => {
    accdialog.close()
})

var accmessage = document.getElementById("accmessage")

accmessage.innerHTML = loggedin ? `<p>Welcome Back, ${username}!</p>` : `<p>You must log in.</p><br><br><div class="actionbuttonsacc"><button class="signup" id="signupbutton">Sign Up</button><button class="login" id="loginbutton">Log In</button>`

var newbutton = document.getElementById("newbutton")
var newdialog = document.getElementById("newdialog")
var exitnewdialog = document.getElementById("exitnewdialog")
var neweventsubmit = document.getElementById("submitneweventbuttonwrapper")
var resetbutton = document.getElementById("reseteventsbutton")
var eventselement = document.getElementById("eventsarea")
var deletealldialog = document.getElementById("deletealldialog")
var exitdeletealldialog = document.getElementById("exitdeletealldialog")
var exitdeletealldialogcancel = document.getElementById("exitdeletealldialogcancel")
var deleteallyesbutton = document.getElementById("deleteallyes")

newbutton.addEventListener("click", () => {
    newdialog.showModal()
})

exitnewdialog.addEventListener("click", () => {
    newdialog.close()
})

neweventsubmit.addEventListener("click", () => {
    var nameeventtemp = document.getElementById("nameofevent").value
    var starttimeofeventtemp = document.getElementById("starttimeofevent").value
    var endtimeofeventtemp = document.getElementById("endtimeofevent").value

    MLEvent.new_event(nameeventtemp, starttimeofeventtemp, endtimeofeventtemp, eventselement)
    newdialog.close()
})

resetbutton.addEventListener("click", () => {
    deletealldialog.showModal()
})

exitdeletealldialog.addEventListener("click", () => {
    deletealldialog.close()
})

exitdeletealldialogcancel.addEventListener("click", () => {
    deletealldialog.close()
})

deleteallyesbutton.addEventListener("click", () => {
    MLEvent.reset_all_events(eventselement)
    deletealldialog.close()
})

var signupbutton = document.getElementById("signupbutton")
var loginbutton = document.getElementById("loginbutton")

signupbutton.addEventListener("click", () => {
    window.location.href = "signup"
})

loginbutton.addEventListener("click", () => {
    window.location.href = "login"
})

var timelinelogo = document.getElementById("timelinelogo")
var abouttinelinedialog = document.getElementById("abouttimelinedialog")
var exitabouttimelinedialog = document.getElementById("exitabouttimelinedialog")

timelinelogo.addEventListener("click", () => {
    abouttinelinedialog.showModal()
})

exitabouttimelinedialog.addEventListener("click", () => {
    abouttinelinedialog.close()
})

var saveeventsbutton = document.getElementById("saveeventsbutton")
var eventselement2 = document.getElementById("eventsarea").innerHTML

var scheduleblob = new Blob([eventselement2], { type: "text/plain" })
var schedbloburl = URL.createObjectURL(scheduleblob)
saveeventsbutton.addEventListener("click", () => {
    var eventselement2 = document.getElementById("eventsarea").innerHTML
    var scheduleblob = "temp"
    var scheduleblob = new Blob([eventselement2], { type: "text/plain" })
    var schedbloburl = URL.createObjectURL(scheduleblob)
    saveeventsbutton.href = schedbloburl
})
saveeventsbutton.href = schedbloburl

var opendialog = document.getElementById("opendialog")
var exitopendialog = document.getElementById("exitopendialog")
var finalizeopendialog = document.getElementById("finalizeopendialog")
var loadeventsfromfilebutton = document.getElementById("loadeventsfromfilebutton")
var filetoopen = document.getElementById("filetoopen")

loadeventsfromfilebutton.addEventListener("click", () => {
    opendialog.showModal()
})

exitopendialog.addEventListener("click", () => {
    opendialog.close()
})

finalizeopendialog.addEventListener("click", () => {
    const reader = new FileReader();
    reader.onload = () => {
        MLEvent.events_list = []
        MLEvent.events_list.push(reader.result)
        eventselement.innerHTML = MLEvent.events_list.join("");
    };
    reader.onerror = () => {
        console.error("An error occured reading the file.")
    };
    reader.readAsText(filetoopen.files[0]);
    opendialog.close()
})
