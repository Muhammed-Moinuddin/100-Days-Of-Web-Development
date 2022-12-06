const adminButton = document.getElementById("admin-button");
const studentButton = document.getElementById("student-button");
const closePanelButton = document.getElementById("close-panel");

studentButton.addEventListener("click", popupPanel)

function popupPanel(){
    document.getElementsById("admin-sign-in-panel").style.display = "none !important";
    console.log("Button Working")
}
