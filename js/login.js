function main() {
    var name = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    alert("Username: " + name + " " + "Password: " + pass +
   "your password is being used as your grades for testing purposes.");

   // Get a reference to the database service
   var database = firebase.database();

   writeUserData(85);

    window.location.href = "dispGrades.html";
}

function writeUserData(userId, grade) {
 firebase.database().ref('User 1/').set({
   Grade: grade
 });
}
