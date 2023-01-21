const adminButton = document.getElementById("admin-button");
const studentButton = document.getElementById("student-button");
const studentCloseButton = document.getElementById("student-close-panel-button");
const adminCloseButton = document.getElementById("admin-close-panel-button");
const submitButton = document.getElementById("submit-button");
const presentButton = document.getElementById("mark-present");

const adminEmail = document.getElementById("admin-email");
const adminPassword = document.getElementById("admin-password");

const adminList = [{email: "moin@gmail.com", password: 1234}, {email: "shahzaib@gmail.com", password: 5678}]

console.log(adminList[0].email)

function openAdminPanel(event){
    event.preventDefault();
    console.log("Clicked");
    for (let i = 0; i < adminList.length; i++){
        if (adminEmail.value == adminList[i].email && adminPassword.value == adminList[i].password){
            window.location.replace("admin-page.html");
        } else if (adminEmail.value !== adminList[i].email || adminPassword.value !== adminList[i].password) {
            document.getElementById("email-description").innerHTML = "Email (email or password is incorrect)"
        }
    }
   
    // if (document.getElementById("admin-email").value == "moin@gmail.com" && document.getElementById("admin-password").value == "1234"){
    //     window.location.replace("admin-page.html");
    // } else {
    //     document.getElementById("email-description").innerHTML = "Email (email or password is incorrect)"
    // }
}
presentButton.addEventListener("click", markPresent)

function markPresent(){
    
}

function PopupPanel(a){
    if (a === 1){
        document.querySelector("form.student-attendance-panel").style = "display: block !important";
    }
    else if (a === 2) {
        document.querySelector("form.admin-sign-in-panel").style = "display: block !important";
    }
    
}





