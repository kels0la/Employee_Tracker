$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyDk4pcHjk2d3WZOp0q0ramKiDYgkusLW2Y",
        authDomain: "employee-tracker-3fa62.firebaseapp.com",
        databaseURL: "https://employee-tracker-3fa62.firebaseio.com",
        projectId: "employee-tracker-3fa62",
        storageBucket: "",
        messagingSenderId: "227774522093"
        };
    
        firebase.initializeApp(config);
    
        var database = firebase.database()

    $("#subBtn").click(function(event){

        event.preventDefault()

        name = $("#name").val().trim();
        role = $("#role").val().trim();
        startdate = $("#startDate").val().trim();
        monthlyRate = $("#rate").val().trim();

        database.ref().push({    
            name: name,
            role: role,
            startdate: startdate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP // takes timseamp of when the data goes into the database
        });

    });

    database.ref().on("child_added", function(snapshot){
        
        var sv = snapshot.val();
        var months = moment(currentDate).diff(sv.startdate,"month");
        var currentDate = moment()

        var newRow = $("<tr>");
        var nameTd = $("<td>");
        var roleTd = $("<td>");
        var startTd = $("<td>");
        var monthsTd = $("<td>");
        var rateTd = $("<td>");
        var billedTd = $("<td>");
    
        nameTd.text(sv.name);
        roleTd.text(sv.role);
        startTd.text(sv.startdate);
        rateTd.text(sv.monthlyRate);
        monthsTd.text(months)
        billedTd.text(months*sv.monthlyRate)
    
        newRow.append(nameTd);
        newRow.append(roleTd);
        newRow.append(startTd);
        newRow.append(monthsTd);
        newRow.append(rateTd);
        newRow.append(billedTd);
    
        $("#tBody").append(newRow);
        
    })

    


});