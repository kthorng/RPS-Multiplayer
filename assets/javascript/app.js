// firebase
  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBHSzRM9wLjKZxnKDhvPP9_LZipc5O6u9I",
//     authDomain: "choo-choo-91452.firebaseapp.com",
//     databaseURL: "https://choo-choo-91452.firebaseio.com",
//     projectId: "choo-choo-91452",
//     storageBucket: "",
//     messagingSenderId: "799834500788"
//   };
//   firebase.initializeApp(config);

//   var database = firebase.database();

  // 2. Button for adding Trains
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#dest-input").val().trim();
    var trainStart = moment($("#start-input").val().trim()).format("HH:mm");
    var trainRate = $("#rate-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newEmp = {
        name: trainName,
        role: trainDest,
        start: trainStart,
        rate: trainRate
    };
  
    // Uploads employee data to the database
    // database.ref().push({
    //   name: trainName,
    //   role: trainDest,
    //   start: trainStart,
    //   rate: trainRate
    // });
  
    // Logs everything to console
    console.log(newEmp.name);
    console.log(newEmp.role);
    console.log(newEmp.start);
    console.log(newEmp.rate);
  
    alert("Employee successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#dest-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(trainStart, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % trainRate;
    console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = trainRate - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainRate),
        $("<td>").text(moment(nextTrain).format("hh:mmA")),
        $("<td>").text(tMinutesTillTrain),
      );
    
      // Append the new row to the table
      $("#train-table > tbody").append(newRow);
  });



//   // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
// database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());
  
//     // Store everything into a variable.
//     var trainName = childSnapshot.val().name;
//     var trainDest = childSnapshot.val().role;
//     var trainStart = childSnapshot.val().start;
//     var trainRate = childSnapshot.val().rate;
  
//     // Employee Info
//     console.log(trainName);
//     console.log(trainDest);
//     console.log(trainStart);
//     console.log(trainRate);
  
//     // Prettify the employee start
//     var empStartPretty = moment(empStart).format("MM/DD/YYYY");
//     console.log('Start Date', empStartPretty)
//     // Calculate the months worked using hardcore math
//     // To calculate the months worked
//     var empMonths = moment().diff(moment(empStart), "months");
//     console.log(empMonths);
  
//     // Calculate the total billed rate
//     var empBilled = empMonths * empRate;
//     console.log(empBilled);
  
//     // Create the new row
//     var newRow = $("<tr>").append(
//       $("<td>").text(empName),
//       $("<td>").text(empRole),
//       $("<td>").text(empStartPretty),
//       $("<td>").text(empMonths),
//       $("<td>").text(empRate),
//       $("<td>").text(empBilled)
//     );
  
//     // Append the new row to the table
//     $("#train-table > tbody").append(newRow);
//   });
  

