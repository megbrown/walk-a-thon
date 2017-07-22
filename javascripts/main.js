"use strict";

let $ = require('jquery');
let donor = require('./donor.js');
let bootstrap = ('../lib/node_modules/bootstrap/dist/js/bootstrap.min.js');

$("#submit-btn").click( function() {
	console.log("submit button clicked");
	let name = $("#name").val();
	let email = $("#email").val();
	let frequency = $("#donationCat option:selected").text();
	let amount = $("#amount").val();
	donor.addDonor(name, email, frequency, amount);
});

$("#clear-btn").click( function() {
	console.log("clear button clicked");
	$("#name").val("");
	$("#email").val("");
	$("#amount").val("");
	$("#donationCat option").prop("selected", function() {
        return this.defaultSelected;
    });
});






