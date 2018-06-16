$(document).ready(function(){

$("#subBtn").click(function (){
event.preventDefault()

var newRow = $("<tr>");
var nameTd = $("<td>");
var roleTd = $("<td>");
var startTd = $("<td>");
var monthsTd = $("<td>");
var rateTd = $("<td>");
var billedTd = $("<td>");

nameTd.text($("#name").val());
roleTd.text($("#role").val());
startTd.text($("#startDate").val());
rateTd.text($("#rate").val());



newRow.append(nameTd);
newRow.append(roleTd);
newRow.append(startTd);
newRow.append(monthsTd);
newRow.append(rateTd);
newRow.append(billedTd);

$("#tBody").append(newRow);



});










});