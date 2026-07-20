export const MLPlatform = {
    "create_account": (username, password) => {
        console.log(`Created new user with username: ${username}, password: ${password} and id: ${MLPlatform.user_id}`)
    },
    "useraccounterr": (err, elem) => {
        if (err === "missingfield") {
            console.error("A required field is missing!");
            elem.innerHTML = "A required field is missing!"
        } else if (err === "hackeralert") {
            console.error("IM CALLING THE POLICE ON YOU");
            elem.innerHTML = "IM CALLING THE POLICE ON YOU"
        } else {
            console.error("The error trying to be thrown using useraccounterr() was invalid.")
            elem.innerHTML = "The error trying to be thrown using useraccounterr() was invalid."
        }
    },
    "user_id": 0,
    "generate_user_id": () => {
        MLPlatform.
        user_id += 1;
    }
}