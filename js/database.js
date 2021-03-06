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

var uname;

function setUname(theName){
  uname = theName;
}


function pullGrades() {
  var findGrades = firebase.database().ref('Users/' + uname);
  var gradeSystem;

  findGrades.on('value', function(snapshot) {
    gradeSystem = ((snapshot.val()));
  });

  return gradeSystem;
}


function submittedData(theName) {
    var theName = document.getElementById("user").value;
    setUname(theName);

    var jsonGradeSystem = returnExampleGradesSystem();

    firebase.database().ref('Users/' + theName ).set(
      jsonGradeSystem);
}

function returnExampleGradesSystem(){
  //this is just an example of a grade system. to be replaced by
  // the homeAccess scraped data by Mark and Rauf.
  var exampleSystem =
  {
    "GPA" : "2.66",

    "Classes" : {
      "Biology" : {
        "Average" : "65.38",
        "Assignments" : {
          "A0" : {
            "Name" : "cells test",
            "SP" : "65",
            "TP" : "100"
          },
          "A1" : {
            "name" : "pop quiz",
            "SP" : "2",
            "TP" : "50"
          },
          "A2" : {
            "name" : "participation grade",
            "SP" : "30",
            "TP" : "30"
          },
          "A3" : {
            "name" : "homework 1",
            "SP" : "20",
            "TP" : "30"
          }
        }
      },

      "Physical Education": {
        "Average" : "99.99",
        "Assignments" : {
          "A0" : {
            "Name" : "football/soccer",
            "SP" : "8",
            "TP" : "10",
          },
          "A1" : {
            "Name" : "frisbee",
            "SP" : "4",
            "TP" : "10",
          }
        }
      }
    }
  }

  return exampleSystem;
}
