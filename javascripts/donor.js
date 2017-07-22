"use strict";

let $ = require('jquery');
let donorTemplate = require('../templates/submission-table.hbs');

let donorArr = [];

function printDonorToDom(userInfoObj) {
	console.log(userInfoObj);
	$("#print-donor-rows").append(donorTemplate(userInfoObj));
}

module.exports.addDonor = (name, email, frequency, amount) => {
	let userInfoObj = {
		name: name,
		email: email,
		frequency: frequency,
		amount: amount
	};
	donorArr.push(userInfoObj);
	printDonorToDom(userInfoObj);
};