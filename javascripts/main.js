"use strict";

let $ = require('jquery');
let bootstrap = ('../lib/node_modules/bootstrap/dist/js/bootstrap.min.js');
let donor = require('./donor.js');
let donorTemplate = require('../templates/submission-table.hbs');

$("#submit-btn").click( function() {
	let userInfoObj = {
		name: $("#name").val(),
		email: $("#email").val(),
		frequency: $("#donationCat option:selected").text(),
		amount: $("#amount").val()
	};
	donor.addDonor(userInfoObj);
	printDonorToDom(userInfoObj);
});

$("#clear-btn").click( function() {
	$("#name").val("");
	$("#email").val("");
	$("#amount").val("");
	$("#donationCat option").prop("selected", function() {
    return this.defaultSelected;
  });
});

function printDonorToDom(userInfoObj) {
	$("#print-donor-rows").append(donorTemplate(userInfoObj));
}






