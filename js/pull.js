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



function pullGrades() {
  var findGrades = firebase.database().ref('Users/' + uname);
  var gradeSystem;

  findGrades.on('value', function(snapshot) {
    gradeSystem = ((snapshot.val()));
  });

  console.log(gradeSystem);
}
