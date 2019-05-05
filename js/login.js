// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXyzlPxV14EIPnskehmxNo5uYNqOE8e30",
  authDomain: "home-access-access.firebaseapp.com",
  databaseURL: "https://home-access-access.firebaseio.com",
  projectId: "home-access-access",
  storageBucket: "home-access-access.appspot.com",
  messagingSenderId: "396567472683",
  appId: "1:396567472683:web:538be5e028fa402a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


function submittedData() {
    var name = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    alert("Username: " + name + " " + "Password: " + pass);

   console.log("changing grades!")
   writeUserData("phil", 85);

   window.location.href = "dispGrades.html";
}

function writeUserData(userId, grade) {
 firebase.database().ref('Users/User 1/').set({
   Grade: grade,
   SecondGrade: grade
 });
}
