"use strict";

let $ = require('jquery');

let donorArr = [];

module.exports.addDonor = (name, email, frequency, amount) => {
	let userInfoObj = {
		name: "name",
		email: "email",
		frequency: "frequency",
		amount: "amount"
	};
	donorArr.push(userInfoObj);
	return userInfoObj;
};